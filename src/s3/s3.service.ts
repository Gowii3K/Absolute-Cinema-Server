import { Injectable } from '@nestjs/common';
import {
  S3Client,
  PutObjectCommand,
  PutObjectCommandInput,
  PutObjectCommandOutput,
} from '@aws-sdk/client-s3';

@Injectable()
export class S3Service {
  private region;
  private s3;
  constructor() {
    console.log(process.env.AWS_ACCESS_KEY);
    console.log(process.env.AWS_SECRET_ACCESS_KEY);

    this.region = process.env.S3_REGION;
    this.s3 = new S3Client({
      region: this.region,
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY || '',
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || '',
      },
    });
  }
  async uploadFile(file: Express.Multer.File, key: string) {
    const bucket = process.env.S3_BUCKET;
    console.log(bucket);
    console.log(process.env.S3_REGION);
    const input: PutObjectCommandInput = {
      Body: file.buffer,
      Bucket: bucket,
      Key: key,
      ContentType: file.mimetype,
      ACL: 'public-read',
    };
    try {
      console.log('trying here');
      const response: PutObjectCommandOutput = await this.s3.send(
        new PutObjectCommand(input),
      );
      console.log('coming here');
      if (response.$metadata.httpStatusCode === 200) {
        console.log(
          `uploading to https://${bucket}.s3.${this.region}.amazonaws.com/${key}`,
        );
        return `https://${bucket}.s3.${this.region}.amazonaws.com/${key}`;
      }
      throw new Error('Image not uploaded');
    } catch (err) {
      console.log(err);
    }
  }
}
