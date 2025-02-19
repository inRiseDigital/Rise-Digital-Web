import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='footer relative pt-14 break-words '>
      <div className='bg-[#161b22]'>
        <div className='max-w-[1280px] mx-auto text-[12px] md:flex flex-row-reverse py-6 justify-between items-center px-4'>
          <ul className='flex items-center max-md:mb-4  '>
            <li className='mr-4'>
              <a href=""><img src="https://github.githubassets.com/images/modules/site/icons/footer/twitter.svg" height="18" width="22" className="d-block" loading="lazy" decoding="async" alt="Twitter icon" /></a>
            </li>
            <li className='mr-4'>
              <a href="https://www.instagram.com/inrise_digital?igsh=am5jZGdkeDM4c2lz"><img src="https://github.githubassets.com/images/modules/site/icons/footer/instagram.svg" height="18" width="22" className="d-block" loading="lazy" decoding="async" alt="Insta icon" /></a>
            </li>
            <li className='mr-4'>
              <a href="https://www.facebook.com/share/14su9ZjWWd/"><img src="https://github.githubassets.com/images/modules/site/icons/footer/facebook.svg" height="18" width="22" className="d-block" loading="lazy" decoding="async" alt="Facebook icon" /></a>
            </li>
            <li className='mr-4'>
              <a href="https://www.linkedin.com/company/104163548/admin/dashboard/"><img src="https://github.githubassets.com/images/modules/site/icons/footer/linkedin.svg" height="18" width="22" className="d-block" loading="lazy" decoding="async" alt="Linkedin icon" /></a>
            </li>
            <li className='mr-4'>
              <a href=""><img src="https://github.githubassets.com/images/modules/site/icons/footer/youtube.svg" height="18" width="22" className="d-block" loading="lazy" decoding="async" alt="Youtube icon" /></a>
            </li>
            <li className='mr-4'>
              <a href=""><img src="https://github.githubassets.com/images/modules/site/icons/footer/tiktok.svg" height="18" width="22" className="d-block" loading="lazy" decoding="async" alt="Tiktik icon" /></a>
            </li>
          </ul>
          <ul className='flex items-center mb-4 sm:mb-0 text-[#7d8590] flex-wrap' >
            <li className="mr-3 ">© 2025 Rise Digital</li>
          </ul>
        </div>
      </div>
      </div>

  )
}

export default Footer