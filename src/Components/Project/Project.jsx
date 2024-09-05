const Image1 = '/assets/one.PNG'
const Image2 = '/assets/2.PNG'
const Image3 = '/assets/3.PNG'
const Image4 = '/assets/10.PNG'
const Image5 = '/assets/4.PNG'
const Image6 = '/assets/5.PNG'
const Image7 = '/assets/6.PNG'
const Image8 = '/assets/7.PNG'
const Image9 = '/assets/8.PNG'
const Image10 = '/assets/9.PNG'
const Image11 = '/assets/11.PNG'
const Image12 = '/assets/13.PNG'
const Image13 = '/assets/12.PNG'
const Image14 = '/assets/14.PNG'
const Image15 = '/assets/15.PNG'
const Image16 = '/assets/16.PNG'
const Image17 = '/assets/17.PNG'
const Image18 = '/assets/18.PNG'
const Image19 = '/assets/19.PNG'
const Image20 = '/assets/20.PNG'
import './project.css'

const Project = () => {
  return (
    <div>
      <div className='bg-cyan-950 h-[700px]'>

        <div className="head">
          <div className='du'>Educax</div>

            <div className='tab'>
              <table>
                <th>Home +</th>
                <th>Courses +</th>
                <th>Blogs +</th>
                <th>Pages +</th>
                <th>Contact Us</th>
              </table>
            </div>
            <div className='but rounded-full'>
              <button>Sign Up</button>
            </div>
          </div>

          <div>
            <h1 className='big'>Grow Your Skills to Advance Your Career path.</h1>
            <p className='small'>Educating, Inspiring, & Transforming Young Women. 
              A Tuituon-Free Private Meddle School</p>
          </div>

          <div className='start'>
            <div className='get rounded-full'>
                <button>Get Started</button>
              </div>
          </div>

          <div className='tree'>
            <img src={Image1} style={{width:300, height:500}} alt="image1" />
            <img src={Image2} style={{width:300, height:500}} alt="image2" />
            <img src={Image3} style={{width:300, height:500}} alt="image3" />
          </div>
      </div>

      <div className='cat'>
        <div className='plo'>
          <h1 className='text-5xl text-cyan-950'>Explore
          Our Categories</h1>
          <p className=' som text-lg text-cyan-950 '>Look into yourself, 
            get something in return as your AchievementLook into yourself, 
            get something Return as your achievement</p>
            <div className='ex bg-cyan-950 rounded-full'>
              <button>Explore Categories</button>
            </div>
        </div>
        <div className='plo-2'>
            <img src={Image4} style={{ width:1000, height:500}} alt="image4" />
        </div>
      </div>

      <div className='grow'>
        <div>
            <img src={Image5} style={{ width:500, height:500}} alt="image5" />
        </div>

        <div className='bout'>
          <p className='som text-lg'>About Us-</p>
          <h1 className=' som text-6xl text-cyan-950'>We Are Maximize Your Learning Growth</h1>
          <p className='som text-lg'>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. 
            Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.
             Elit aute irure tempo.</p>
             <div className='ex bg-cyan-950 rounded-full'>
               <button>Explore +</button>
            </div>
        </div>
      </div>

      <div className=' mo4 bg-cyan-950'>
        <h1 className='pop'>Our Most Popular Courses</h1>
        <p className='mula'>Minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.duis enim velit mollit. 
        Exercitation veniam consequat.
          </p>

        <div className='swipe'>

          <div className='ard'>
            <img src={Image6} style={{ width:300, height:300}} alt="image6" />
            
          </div>
 
          <div className='ard'>
            <img src={Image7} style={{ width:300, height:300}} alt="image7" />
          </div>

          <div className='ard'>
            <img src={Image8} style={{ width:300, height:300}} alt="image8" />
          </div>

          <div className='ard'>
            <img src={Image9} style={{ width:300, height:300}} alt="image9" />
          </div>

        </div>
      </div>

      <div className='stor'>
        <h1 className=' our'>Our Success Story</h1>
        <p className='ula'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
          Velit officia consequat duis enim velit mollit. 
          Exercitation veniam consequat sunt nostrud amet.</p>
          <div>
            <img src={Image10} style={{ width:1300, height:400}} alt="image10" />
          </div>
      </div>

      <div className='meet'>

        <div className='met'>
          <div className='let'>
            <h1 className='som text-6xl text-cyan-950'>Meet Our Expert</h1>
            <p className='som text-lg text-cyan-950'>Clarity gives you the blocks & components you needto create a truly professional website, 
              landing page or admin panel for your saas components you needto create a truly</p>
              <div className='ex bg-cyan-950 rounded-full'>
               <button>All Members</button>
            </div>
          </div>
          <div className='rig'>
            <div>
               <img src={Image11} style={{ width:300, height:300}} alt="image11" />
            </div>
            <div>
               <img src={Image12} style={{ width:300, height:300}} alt="image12" />
            </div>
          </div>
        </div>

        <div className='meet-2'>
          <div>
            <img src={Image13} style={{ width:300, height:300}} alt="image13" />
          </div>
          <div>
            <img src={Image14} style={{ width:300, height:300}} alt="image14" />
          </div>
          <div>
            <img src={Image15} style={{ width:300, height:300}} alt="image15" />
          </div>
          <div>
            <img src={Image16} style={{ width:300, height:300}} alt="image16" />
          </div>
        </div>
      </div>
      
      <div className='join'>
        <h1 className='som text-6xl text-cyan-950'>Join the biggest
        Community of learning</h1>
        <p className='som text-lg text-cyan-950'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Aliquam, quis malesuada sed tristique sed vulputate eleifend urna potenti. Amet non sed eget</p>
      </div>

      <div className='map'>
        <img src={Image17} style={{ width:1300, height:400}} alt="image17" />
        <div className=' lex bg-cyan-950 rounded-full'>
               <button>Join Now</button>
         </div>
      </div>

      <div className='clients bg-cyan-950'> 
        <h1 className='som text-6xl text-white text-center '>What Clients Have to Say About Us</h1>
        <p className='som text-2xl text-white text-center'>Interdum et malesuada fames ac ante ipsum</p>
        <p className='som text-4xl text-white text-center'>Our family was travelling via bullet train between cities in japan with 
          our luggage - the location for this hotel made that so easy. Agoda Price was fantastic.
        </p>
      </div>

      <div className='log'>

        <div className='gis'>

          <div className='late'>
            <h1 className='som text-7xl text-cyan-950 text-center'>Latest News, Blog & Articles</h1>
          </div>

          <div className='more'>
              <div className=' lex bg-cyan-950 rounded-full'>
                  <button>View More</button>
            </div>
          </div>

        </div>

        <div className='three-cards'>
          <div className='card-one'>
             <img src={Image18} style={{ width:300, height:200}} alt="image18" />
             <h1 className='text-2xl text-cyan-950 text-center'>Art & Design</h1>
             <p className='som text-lg text-cyan-950 text-center'>Why Product Thinking is the next big thing in UX Design</p>
          </div>

          <div className='card-one'>
             <img src={Image19} style={{ width:300, height:200}} alt="image19" />
             <h1 className='text-2xl text-cyan-950 text-center'>Business</h1>
             <p className='som text-lg text-cyan-950 text-center'>Range Input That Looks Consistent Across All Browser</p>
          </div>

          <div className='card-one'>
             <img src={Image20} style={{ width:300, height:200}} alt="image20" />
             <h1 className='text-2xl text-cyan-950 text-center'>Art & Design</h1>
             <p className='som text-lg text-cyan-950 text-center'>Generating RPG Tethered : Phase of Development</p>
          </div>
        </div>
        <p className='som text-2xl text-cyan-950 text-center'>Trusted by 4,000+ companies</p>
      </div>

      <div className="footer bg-cyan-950">
            <div className="fold1">
                <h2 className='som text-4xl text-white text-center'>Educax</h2>
                <p className='som text-xl text-white text-center'>You minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                     Velit officia consequat duis enim velit mollit. 
                    Exercitation veniam consequat sunt nostrud amet.</p>
            </div>
            <div className="fold1">
                <h2 className='som text-4xl text-white text-center'>Get In Touch</h2>
                <p className='som text-xl text-white text-center'>4517 Washington Ave. Manchester, Kentucky 39495

                            icon
                            support@thetork.com
                            mail@thetork.com
                            icon
                            (207) 555-0119
                            (702) 555-0122</p>
            </div>

            <div className="fold1">
                <h2 className='som text-4xl text-white text-center'>Explore Links</h2>
                <p className='som text-xl text-white text-center'>
                    Courses,
                    About Us,
                    Content Writing,
                    Management,
                    Web Development,
                    and Art & Design.
                </p>
            </div>
            <div className="fold1">
                <h2 className='som text-4xl text-white text-center'>Office Time</h2>
                <p className='som text-xl text-white text-center'>Mon-Sat: 
                    10:00AM - 4.00PM
                    Sunday: 10:00AM - 4.00PM
                    Friday: Close</p>
            </div>
           
        </div>
        <div className="close bg-cyan-950">
            <hr></hr>
            <p className='som text-xl text-white text-center'>© 2024 Copyright | All Rights Reserved.</p>
        </div>
    </div>
    
      
    )
  }
  
  export default Project;