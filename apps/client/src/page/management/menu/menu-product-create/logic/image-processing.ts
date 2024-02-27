import Resizer from "react-image-file-resizer";

export enum Compression {
  low,
  high,
}

export async function convertImage(
    file: File,
    type: Compression,
): Promise<File> {
  let quality = 100;
  let size = 4086;
  switch (type) {
    case Compression.high: {
      quality = 80;
      size = 2048;
      break;
    }
    case Compression.low: {
      quality = 80;
      size = 1024;
      break;
    }
  }

  return new Promise<File>((resolve) => {
    Resizer.imageFileResizer(
        file,
        size,
        size,
        "JPEG",
        quality,
        0,
        (uri) => {
          resolve(uri as File);
        },
        "file",
    );
  });
}
