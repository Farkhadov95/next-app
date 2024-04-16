"use client";

import React, { useState } from "react";
import { useEdgeStore } from "../lib/edgestore";
import Link from "next/link";
import { SingleImageDropzone } from "../components/SingleImageDropzone";

const UploadImage = () => {
  const [file, setFile] = useState<File>();
  const [urls, setUrls] = useState<{
    url: string;
    thumbnailUrl: string | null;
  }>();
  const [progress, setProgress] = useState(0);
  const { edgestore } = useEdgeStore();

  const uploadImage = async () => {
    if (file) {
      const res = await edgestore.myPublicImages.upload({
        file,
        input: { type: "post" },
        onProgressChange: (progress) => setProgress(progress),
      });
      setUrls({
        url: res.url,
        thumbnailUrl: res.thumbnailUrl,
      });
    }
  };

  return (
    <div className="flex flex-col items-center m-6 gap-2">
      <SingleImageDropzone
        width={200}
        height={200}
        value={file}
        dropzoneOptions={{
          maxSize: 1024 * 1024 * 1,
        }}
        onChange={(file) => {
          setFile(file);
        }}
      />
      <button className="btn btn-primary" onClick={uploadImage}>
        Upload
      </button>
      <div className="h-[6px] w-44 border rounded overflow-hidden transition-all duration-150">
        <div
          className="h-full bg-black"
          style={{
            width: `${progress}%`,
          }}
        />
      </div>

      {urls?.url && (
        <Link href={urls.url} target="_blank">
          URL
        </Link>
      )}

      {urls?.thumbnailUrl && (
        <Link href={urls.thumbnailUrl} target="_blank">
          THUMBNAIL
        </Link>
      )}
    </div>
  );
};

export default UploadImage;
