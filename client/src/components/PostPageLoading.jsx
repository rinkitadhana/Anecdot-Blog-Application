import { Skeleton } from "@/components/ui/skeleton"

const PostPageLoading = () => {
  return (
    <section className=" flex flex-col gap-5">
      <Skeleton className=" bg-zinc-200 w-[60px] h-[20px] rounded-lg" />
      <div className=" flex flex-col items-center  gap-2  md:px-4">
        <Skeleton className=" bg-zinc-200 w-full h-[50px] rounded-lg" />
        <Skeleton className=" bg-zinc-200 w-1/2 h-[40px] rounded-lg" />
        <Skeleton className=" bg-zinc-200 w-1/4 h-[40px] rounded-lg" />
      </div>
      <Skeleton className=" bg-zinc-200 w-full h-[340px] rounded-lg" />
      <div className=" flex flex-col gap-5">
        <Skeleton className=" bg-zinc-200 w-full h-[100px] rounded-lg" />
        <Skeleton className=" bg-zinc-200 w-full h-[100px] rounded-lg" />
        <Skeleton className=" bg-zinc-200 w-full h-[100px] rounded-lg" />
        <Skeleton className=" bg-zinc-200 w-full h-[100px] rounded-lg" />
        <Skeleton className=" bg-zinc-200 w-full h-[100px] rounded-lg" />
        <Skeleton className=" bg-zinc-200 w-full h-[100px] rounded-lg" />
        <Skeleton className=" bg-zinc-200 w-full h-[100px] rounded-lg" />
        <Skeleton className=" bg-zinc-200 w-full h-[100px] rounded-lg" />
        <Skeleton className=" bg-zinc-200 w-full h-[100px] rounded-lg" />
      </div>
      <Skeleton className=" bg-zinc-200 w-[60px] h-[20px] rounded-lg" />
    </section>
  )
}

export default PostPageLoading
