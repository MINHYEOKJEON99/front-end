"use client";

import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { CgCloseO } from "react-icons/cg";

export default function PostDetailImageModal() {
  const { imageUrl }: { imageUrl: string } = useParams();
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 top-0 flex flex-col items-center justify-center bg-gray-600 bg-opacity-30">
      <div className="flex w-[70%] max-w-[1100px] animate-slide-down items-center justify-between">
        <p className="text-xl font-bold text-white">사진 크게보기</p>
        <CgCloseO
          size={48}
          color="#545454"
          className="translate-x-12 cursor-pointer"
          onClick={handleBack}
        />
      </div>
      <div className="relative h-[60%] w-[70%] max-w-[1100px] animate-slide-down overflow-hidden rounded-lg bg-white">
        <Image src={imageUrl} alt="이미지" layout="fill" />
      </div>
    </div>
  );
}