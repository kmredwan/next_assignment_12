import { BsFacebook, BsLinkedin, BsTwitter } from 'react-icons/bs';
export default function About() {
  return (
    <div className="mt-[100px] mb-12">
      <h1 className="text-center">AUTHOR - K M REDWAN</h1>
      <div className="flex flex-col  md:justify-evenly md:flex-row items-center">
        <div>
          <img
            className="w-[500px] rounded-full ring ring-offset-2 ring-green-400 my-10 md:my-0"
            src="https://media.licdn.com/dms/image/C5603AQHTB0yxGf0GNA/profile-displayphoto-shrink_800_800/0/1624701919915?e=2147483647&v=beta&t=j6R0epKicYDxQYxbYO9xSqUjv3OpC6_PZcaAi7o9Nwk"
            alt=""
          />
        </div>
        <div className="w-[500px]">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
            rerum! Sequi deserunt explicabo beatae animi tempore iure eaque fuga
            veritatis, quis provident ipsum consectetur aut blanditiis,
            recusandae dolore iusto veniam!
          </p>
          <div className="icon mt-10">
            <ul className='flex gap-4 text-2xl'>
              <li className='text-blue-600'><BsFacebook /></li>
              <li className='text-blue-600'><BsTwitter /></li>
              <li className='text-blue-600'><BsLinkedin /></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
