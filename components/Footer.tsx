import { footerLinks } from '@/utils/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type ColumnProps={
  title:string,
  links:Array<string>
}

const FooterColumn=({links,title}:ColumnProps)=>{
  return(
    <div className='footer_column'>
      <h4 className='font-semibold'>
        {title}
      </h4>
      <ul className='flex flex-col gap-2 font-normal'>
         {links.map((item)=>(
          <Link href={"/"} key={item}>
            {item}
          </Link>
         ))}
      </ul>
    </div>
  )
}
const Footer = () => {
  return (
    <footer className='flexStart footer'>

      <div className='flex flex-col gap-12 w-full'>
          <div className='flex items-start  flex-col'>
              <Image
              src={"./logo-purple.svg"}
              width={115}
              height={38}
              alt='flexibble'
              />  
              <p className='text-start text-sm font-normal mt-5 max-w-xs'>
                Flexibble is the world's leading community for creatives to share, grow, and get hired.
              </p>
          </div>
          <div className='flex flex-wrap gap-12'>
              <FooterColumn
              links={footerLinks[0].links}
              title={footerLinks[0].title}
              />
              <div className='flex-1 flex flex-col gap-4'>
              <FooterColumn
              links={footerLinks[1].links}
              title={footerLinks[1].title}
              />
              <FooterColumn
              links={footerLinks[2].links}
              title={footerLinks[2].title}
              />
              </div>
              <FooterColumn
              links={footerLinks[3].links}
              title={footerLinks[3].title}
              />
              <div className='flex-1 flex flex-col gap-4'>
              <FooterColumn
              links={footerLinks[4].links}
              title={footerLinks[4].title}
              />
              <FooterColumn
              links={footerLinks[5].links}
              title={footerLinks[5].title}
              />
              </div>
              <FooterColumn
              links={footerLinks[6].links}
              title={footerLinks[6].title}
              />
          </div>
      </div>
      <div className='flexBetween footer'>
        <p>
          @2023 Flexibble. All rights reserved.
        </p>
        <p className='text-gray'>
          <span className='text-black font-semibold'>
              10,214
          </span>
          projects submitted
        </p>
      </div>
    </footer>
  )
}

export default Footer