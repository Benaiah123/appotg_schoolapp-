import React from 'react'
import Image from 'next/image'
import { parentActions, quickActions } from '@/data/admin'
import { name } from '@/data'
type Welcome1 ={
    type: String,
}
const Welcome = ({type}: Welcome1) => {
  return (
    <div className="bg-white p-4 sm:p-6 rounded-xl shadow w-full">
                <h2 className="text-lg sm:text-2xl lg:text-[32px] font-normal p-2 sm:p-3">
                  Welcome {type === "admin" && name.admin.firstName}
                  {type === "parent" && name.parent}
                  {type === "student" && name.student.firstName}
                  {type === "tutor" && `Mr. ${name.tutor.firstName}`}
                </h2>
    
                {/* Quick Actions */}
                <div className="flex flex-col bg-[#BABABA]/25 p-3 sm:p-4 rounded-lg">
                  <div className="flex flex-row justify-between items-center">
                    <p className="font-semibold text-xs sm:text-sm">
                      Quick Actions
                    </p>
                    <Image
                      src="/icons/Frame 21.png"
                      alt=""
                      width={40}
                      height={25}
                      className="sm:w-[50px] sm:h-[30px]"
                    />
                  </div>
    
                  {/* Actions Row */}
                  <div className="flex flex-row gap-2 sm:gap-4 p-2 overflow-x-auto">
                    {type !== "parent" && quickActions.map((action) => (
                      <div
                        key={action.name}
                        className="flex flex-col gap-1 sm:gap-2 items-center justify-center rounded-lg 
                         w-16 sm:w-20 md:w-24 h-20 sm:h-24  
                         bg-transparent hover:bg-gray-100 flex-shrink-0"
                      >
                        <Image
                          src={action.img}
                          alt="image"
                          width={32}
                          height={32}
                          className="sm:w-[40px] sm:h-[40px] md:w-[48px] md:h-[48px]"
                        />
                        <span className="text-[10px] sm:text-xs md:text-sm text-center">
                          {action.name}
                        </span>
                      </div>
                    ))}
                    {type === "parent" && parentActions.map((action) => (
                      <div
                        key={action.name}
                        className="flex flex-col gap-1 sm:gap-2 items-center justify-center rounded-lg 
                         w-16 sm:w-20 md:w-24 h-20 sm:h-24  
                         bg-transparent hover:bg-gray-100 flex-shrink-0"
                      >
                        <Image
                          src={action.img}
                          alt="image"
                          width={32}
                          height={32}
                          className="sm:w-[40px] sm:h-[40px] md:w-[48px] md:h-[48px]"
                        />
                        <span className="text-[10px] sm:text-xs md:text-sm text-center">
                          {action.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
  )
}

export default Welcome
