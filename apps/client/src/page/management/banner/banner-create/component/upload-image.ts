import { graphql } from '@client/graphql/types';
import { client } from '@client/graphql/client.ts';
import { Compression, convertImage } from '@client/page/management/menu/menu-product-create/logic/image-processing';
const GET_PRESIGN_UPLOAD = graphql(`
  query GetPreSignUpload($filename: String!) {
    preSignUpload(filename: $filename) {
      origin
      originPath
      thumbnail
      thumbnailPath
    }
  }
`);

export async function uploadImage(file: File) {
  const preSignResponse = await client.query({
    query: GET_PRESIGN_UPLOAD,
    variables: { filename: file.name },
  });

  if (preSignResponse.error) {
    throw preSignResponse.error;
  }

  const headers = {
    'x-amz-acl': 'public-read',
  };

  await Promise.all([
    fetch(preSignResponse.data.preSignUpload.origin, {
      method: 'PUT',
      headers: headers,
      body: await convertImage(file, Compression.high),
    }),
    fetch(preSignResponse.data.preSignUpload.thumbnail, {
      method: 'PUT',
      headers: headers,
      body: await convertImage(file, Compression.low),
    }),
  ]);

  return preSignResponse;
}
