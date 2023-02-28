import React, { useState, useEffect, useRef } from "react"
import Heading from "./Heading"
import LikeProductCard from "./LikeProductCard"
import { motion as m } from "framer-motion"
import { useInView } from "framer-motion"
function Recommended({ allListings }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  return (
    <div
      style={{
        clipPath: "polygon(0 5%, 100% 0%, 100% 93%, 0 90%)",
      }}
      className="flex items-center flex-col px-5 pt-16 bg-white pb-40"
    >
      <Heading
        title="Recommended for You"
        subtitle="Properties close to you are recommended."
      />

      <m.div
        ref={ref}
        className="grid grid-cols-3 gap-5"
        style={{
          transform: isInView ? "none" : "translateX(-100px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
        }}
      >
        {allListings &&
          Array.from(allListings)
            .slice(0, 3)
            .map((item) => (
              <div className="h-30 w-30" key={item.id}>
                <LikeProductCard {...item} />
              </div>
            ))}
      </m.div>
    </div>
  )
}

export default Recommended
