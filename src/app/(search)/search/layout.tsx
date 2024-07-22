import Link from "next/link"

import React from "react"

import LeftArrow from "@/asset/icons/LeftArrow.svg"
import Search from "@/asset/icons/Search.svg"
import Nav from "@/components/Pages/search/Nav"

const SearchLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex flex-col bg-mono-white">
      <div className="sticky top-0 z-10 flex h-14 items-center bg-mono-white px-4">
        <Link href={"/"}>
          <LeftArrow />
        </Link>
        <div className="relative ml-4 h-10 flex-1 rounded-full bg-grayscale-gray4 px-12">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            className="h-full w-full bg-transparent outline-none"
            type="text"
            placeholder="검색어를 입력해주세요"
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2">x</div>
        </div>
      </div>
      <div className="mt-2 flex-1 px-4">
        <Nav />
        <div className="py-4">{children}</div>
      </div>
    </main>
  )
}

export default SearchLayout
