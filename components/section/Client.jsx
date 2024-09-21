"use client";
 
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export default function Client() {
    const clients = [
        '/images/clients/image 61.png',
        '/images/clients/image 62.png',
        '/images/clients/image 63.png',
        '/images/clients/image 64.png',
        '/images/clients/image 65.png',
        '/images/clients/image 66.png',
    ]
  return (
    <section className='max-w-7xl mx-auto px-[15px]'>
        <p className='text-center text-[18px] md:text-[18px] text-primary'>Partners & Clients</p>
        <h1 className='text-center text-[30px] md:text-[48px]'>We work with the best pepole</h1>
        <ClientShowcaseCard
            items={clients}
            direction="right"
            speed="fast"
        />
    </section>
  )
}

export function ClientShowcaseCard ({ items, direction = "left", speed = "fast", pauseOnHover = true, className }) {
    const containerRef = React.useRef(null);
    const scrollerRef = React.useRef(null);
   
    useEffect(() => {
      addAnimation();
    }, []);
    const [start, setStart] = useState(false);
    function addAnimation() {
      if (containerRef.current && scrollerRef.current) {
        const scrollerContent = Array.from(scrollerRef.current.children);
   
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          if (scrollerRef.current) {
            scrollerRef.current.appendChild(duplicatedItem);
          }
        });
   
        getDirection();
        getSpeed();
        setStart(true);
      }
    }
    const getDirection = () => {
      if (containerRef.current) {
        if (direction === "left") {
          containerRef.current.style.setProperty(
            "--animation-direction",
            "forwards"
          );
        } else {
          containerRef.current.style.setProperty(
            "--animation-direction",
            "reverse"
          );
        }
      }
    };
    const getSpeed = () => {
      if (containerRef.current) {
        if (speed === "fast") {
          containerRef.current.style.setProperty("--animation-duration", "20s");
        } else if (speed === "normal") {
          containerRef.current.style.setProperty("--animation-duration", "40s");
        } else {
          containerRef.current.style.setProperty("--animation-duration", "80s");
        }
      }
    };
    return (
      <div
        ref={containerRef}
        className={cn(
          "scroller mt-10 relative max-w-7xl overflow-hidden",
          className
        )}
      >
        <div
          ref={scrollerRef}
          className={cn(
            " flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
            start && "animate-scroll ",
            pauseOnHover && "hover:[animation-play-state:paused]"
          )}
        >
          {items.map((item, idx) => (
            <div key={idx} className="max-w-sm flex-shrink-0 rounded-lg overflow-hidden">
                <img
                    src={item}
                    alt={`logo-${idx}`}
                    className="h-[68px] md:h-[128px] object-contain"
                />
          </div>
          ))}
        </div>
      </div>
    );
  };