"use client";
import { useState, MouseEvent } from 'react';

interface ImageMouseEvent extends MouseEvent<HTMLImageElement> {
  target: HTMLImageElement & EventTarget;
}

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="w-screen h-screen bg-[#212121] relative overflow-hidden flex items-center justify-center">
      <div className="absolute top-0 left-0 w-full overflow-hidden" style={{height: 'min(4.5vh, 65px)', zIndex: 1}}>
        <div className="flex whitespace-nowrap animate-marquee">
          {Array.from({length: 20}).map((_, i) => (
            <span key={i} className="font-bold" style={{
              fontFamily: 'Times New Roman, serif',
              fontSize: 'min(2.0vw, 38px)',
              marginRight: 'min(3vw, 60px)',
              background: 'linear-gradient(180deg, #777 0%, #333 50%, #111 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              ROYAL ENFIELD
            </span>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden" style={{height: 'min(4.5vh, 65px)', zIndex: 1}}>
        <div className="flex whitespace-nowrap animate-marquee-reverse">
          {Array.from({length: 20}).map((_, i) => (
            <span key={i} className="font-bold" style={{
              fontFamily: 'Times New Roman, serif',
              fontSize: 'min(2.0vw, 38px)',
              marginRight: 'min(3vw, 60px)',
              background: 'linear-gradient(180deg, #777 0%, #333 50%, #111 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              ROYAL ENFIELD
            </span>
          ))}
        </div>
      </div>

      <div className="absolute left-[1vw] top-1/2 transform -translate-y-1/2 -rotate-90">
        <span className="responsive-text-xl font-bold text-white" style={{fontFamily: 'Stencil', background: 'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
          MLG 1901
        </span>
      </div>

      <div className="absolute top-1/2 transform -translate-y-1/2 rotate-90" style={{right: '-70px', zIndex: 10}}>
        <span className="responsive-text-xl font-bold" style={{fontFamily: 'Stencil', background: 'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
          MADE LIKE A GUN
        </span>
      </div>

      <div className="main-content-frame relative bg-[#212121] rounded-[20px] overflow-hidden" style={{
        width: 'min(100vw, calc(100vh * 16/9))',
        height: 'min(100vh, calc(100vw * 9/16))',
        aspectRatio: '16/9'
      }}>

        <div className="absolute bg-black rounded-[20px] overflow-hidden" style={{
          left: '2%',
          top: '6%',
          width: '60%',
          height: '94%'
        }}>
          <img
            src="/images/bike.png"
            alt="Motorcycle background"
            className="absolute object-cover cursor-pointer transition-all duration-700 ease-out"
            style={{
              left: '4.6%',
              top: '16.2%',
              width: '100.9%',
              height: '50.7%',
              transformStyle: 'preserve-3d',
              zIndex: 5
            }}
            onClick={() => setIsModalOpen(true)}
            onMouseEnter={(e: ImageMouseEvent) => {
              e.target.style.transform = 'scale(1.15) rotateY(8deg) rotateX(3deg) translateZ(50px)';
              e.target.style.zIndex = '50';
              e.target.style.filter = 'drop-shadow(0 20px 40px rgba(0,0,0,0.7)) brightness(1.1)';
              e.target.style.borderRadius = '12px';
            }}
            onMouseLeave={(e: ImageMouseEvent) => {
              e.target.style.transform = 'scale(1) rotateY(0deg) rotateX(0deg) translateZ(0px)';
              e.target.style.zIndex = '5';
              e.target.style.filter = 'none';
              e.target.style.borderRadius = '0px';
            }}
          />

          <img
            src="/images/motorcycle_outline.svg"
            alt="Motorcycle outline"
            className="absolute opacity-80"
            style={{
              left: '38.0%',
              top: '8.0%',
              width: '27.2%',
              height: '26.8%'
            }}
          />


          <div className="absolute" style={{
            left: '5%',
            top: '12%',
            width: '12.1%',
            height: '4.3%'
          }}>
            <h1 className="text-white responsive-text-lg font-normal leading-tight tracking-normal whitespace-nowrap" style={{fontFamily: 'Bebas Neue'}}>
              HUNTER 350
            </h1>
          </div>

          <div className="absolute" style={{
            left: '5%',
            top: '16.6%',
            width: '22.4%',
            height: '17.6%'
          }}>
            <p className="text-white responsive-text-sm font-normal leading-tight" style={{fontFamily: 'Quicksand'}}>
              The Hunter 350 fills a space in the Royal Enfield lineup. It has the sound, feel, and character you expect from a Royal Enfield single, and the lighter, more nimble chassis design feels more modern and refined. It&apos;s not as traditional, but that&apos;s the point—and it certainly isn&apos;t generic
            </p>
          </div>

          <div className="absolute flex items-center" style={{
            left: '12.0%',
            top: '36.0%',
            width: '20.6%',
            height: '1.9%',
            gap: 'min(0.2vw, 19px)'
          }}>
            <img
              src="/images/arrow-vector.png"
              alt="Arrow"
              style={{
                width: 'min(1.5vw, 48px)',
                height: 'min(0.6vh, 23px)'
              }}
            />
            <span className="text-[#FF9900] responsive-text-sm font-normal" style={{fontFamily: 'Bebas Neue'}}>Learn More</span>
          </div>
        </div>

        <div className="absolute bg-[#0A0A0A] rounded-[20px] overflow-hidden" style={{
          left: '64%',
          top: '6%',
          width: '34%',
          height: '94%'
        }}>

          <div className="absolute group cursor-pointer" style={{
            left: '3.5%',
            top: '5.4%',
            width: '92.2%',
            height: '37.8%',
            zIndex: 15
          }}>
            <img
              src="/images/right_bg-7421f6.png"
              alt="Right background"
              className="w-full h-full object-cover rounded-[20px]"
            />
            <div className="absolute bg-[rgba(10,10,10,0.36)] rounded-r-[20px]" style={{
              left: '65.5%',
              top: '0%',
              width: '34.5%',
              height: '100%'
            }}></div>
            <div className="absolute" style={{
              left: '67.9%',
              top: '4.3%',
              width: '30.9%',
              height: '58.9%'
            }}>
              <p className="text-white responsive-text-sm font-normal leading-tight" style={{fontFamily: 'Quicksand'}}>
                At the heart of the Hunter beats a fuel-injected, long-stroke 350cc J-engine that delivers a smoother ride, higher RPM and dollops of torque. Paired with a steady downtube spine frame and grounded suspension, the Hunter 350 gives the right amount of power and precision, whether you&apos;re revving up the city streets or gunning down the motorway.
              </p>
            </div>

            <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out" style={{
              left: '70%',
              top: '85%',
              width: '30%',
              height: '10%',
              zIndex: 25
            }}>
              <button className="w-full h-full bg-[#FF0000] text-white font-bold rounded-[8px] flex items-center justify-center gap-2 hover:bg-[#E60000] transition-colors duration-200" style={{
                fontFamily: 'Bebas Neue',
                fontSize: 'min(0.8vw, 14px)',
                letterSpacing: '1px'
              }}>
                BOOK A TEST RID
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" style={{ marginLeft: '4px' }}>
                  <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                </svg>
              </button>
            </div>
          </div>

          <div className="absolute flex" style={{
            left: '3.8%',
            top: '46.8%',
            gap: 'min(1.2vw, 23px)'
          }}>
            <img src="/images/gallery1.png" alt="Gallery 1" className="object-cover rounded-[10px]" style={{
              width: 'min(8.0vw, 187px)',
              height: 'min(15.9vh, 171px)'
            }} />
            <img src="/images/gallery2-5fc20a.png" alt="Gallery 2" className="object-cover rounded-[10px]" style={{
              width: 'min(8.0vw, 188px)',
              height: 'min(15.9vh, 171px)'
            }} />
            <img src="/images/gallery3.png" alt="Gallery 3" className="object-cover rounded-[10px]" style={{
              width: 'min(8.0vw, 187px)',
              height: 'min(15.9vh, 171px)'
            }} />
          </div>

          <div className="absolute flex" style={{
            left: '13.9%',
            top: '67.6%',
            gap: 'min(2.6vw, 50px)'
          }}>
            <span className="text-[#FF9900] responsive-text-md font-normal" style={{fontFamily: 'Bebas Neue'}}>COLORS</span>
            <span className="text-[#FF9900] responsive-text-md font-normal" style={{fontFamily: 'Bebas Neue'}}>HIGHLIGHTS</span>
            <span className="text-[#FF9900] responsive-text-md font-normal" style={{fontFamily: 'Bebas Neue'}}>GALLERY</span>
            <span className="text-[#FF9900] responsive-text-md font-normal" style={{fontFamily: 'Bebas Neue'}}>REVIEWS</span>
            <span className="text-[#FF9900] responsive-text-md font-normal" style={{fontFamily: 'Bebas Neue'}}>FAQ&apos;s</span>
          </div>

          <div className="absolute bg-[#FF9900]" style={{
            left: '46.9%',
            top: '70.9%',
            width: 'min(4vw, 77px)',
            height: 'min(0.1vh, 2px)'
          }}></div>

          <div className="absolute flex items-center" style={{
            left: '13.9%',
            top: '76.6%',
            gap: 'min(3.5vw, 60px)'
          }}>
            <div className="flex flex-col items-center" style={{gap: 'min(2vh, 18px)'}}>
              <img src="/images/findastore.png" alt="Find Store" className="object-contain" style={{
                width: 'min(5.0vw, 97px)',
                height: 'min(5.0vh, 97px)'
              }} />
              <span className="text-[#FF9900] responsive-text-md font-normal" style={{fontFamily: 'Bebas Neue'}}>find a Store</span>
            </div>
            <div className="flex flex-col items-center" style={{gap: 'min(2vh, 18px)'}}>
              <img src="/images/bookaservice.png" alt="Book Service" className="object-contain" style={{
                width: 'min(5.0vw, 97px)',
                height: 'min(5.0vh, 97px)'
              }} />
              <span className="text-[#FF9900] responsive-text-md font-normal" style={{fontFamily: 'Bebas Neue'}}>Book a Service</span>
            </div>
            <div className="flex flex-col items-center" style={{gap: 'min(2vh, 18px)'}}>
              <img src="/images/customersupport.png" alt="Customer Support" className="object-contain" style={{
                width: 'min(5.0vw, 97px)',
                height: 'min(5.0vh, 97px)'
              }} />
              <span className="text-[#FF9900] responsive-text-md font-normal" style={{fontFamily: 'Bebas Neue'}}>Customer Support</span>
            </div>
          </div>

          <img
            src="/images/brand_logo.png"
            alt="Brand Logo"
            className="absolute object-cover"
            style={{
              left: '86%',
              top: '91.1%',
              width: 'min(4.2vw, 81px)',
              height: 'min(5.8vh, 110px)'
            }}
          />

          <div className="absolute bg-[#A1A1A1]" style={{
            left: '13.9%',
            top: '94.5%',
            width: 'min(21.3vw, 410px)',
            height: 'min(0.05vh, 1px)'
          }}></div>

        </div>

        <div className="absolute flex items-center" style={{
          left: '5%',
          top: '8%',
          width: '60%',
          height: '4%',
          zIndex: 10
        }}>
          <img
            src="/images/logo-43d0f5.png"
            alt="Royal Enfield Logo"
            style={{
              width: 'min(12vw, 230px)',
              height: 'min(2.5vh, 48px)',
              marginRight: 'min(2vw, 38px)'
            }}
          />

          <div className="flex items-center" style={{
            gap: 'min(1.9vw, 36px)'
          }}>
            <span className="text-white font-normal" style={{fontFamily: 'Bebas Neue', fontSize: 'min(1.04vw, 20px)'}}>MOTOCYCLES</span>
            <span className="text-white font-normal" style={{fontFamily: 'Bebas Neue', fontSize: 'min(1.04vw, 20px)'}}>LOCATE US</span>
            <span className="text-white font-normal" style={{fontFamily: 'Bebas Neue', fontSize: 'min(1.04vw, 20px)'}}>EVENTS</span>
            <span className="text-white font-normal" style={{fontFamily: 'Bebas Neue', fontSize: 'min(1.04vw, 20px)'}}>ACCESSORIES</span>
            <span className="text-white font-normal" style={{fontFamily: 'Bebas Neue', fontSize: 'min(1.04vw, 20px)'}}>APPAREL</span>
            <span className="text-white font-normal" style={{fontFamily: 'Bebas Neue', fontSize: 'min(1.04vw, 20px)'}}>SUPPORTS</span>
            <span className="text-[#FF0000] font-normal" style={{fontFamily: 'Bebas Neue', fontSize: 'min(1.04vw, 20px)'}}>LOGIN</span>
          </div>
        </div>

        <div className="absolute z-20 flex justify-between gap-4" style={{
          left: '4%',
          top: '60%',
          width: '55%',
          height: 'min(36.8vh, 397px)'
        }}>
          <div className="relative" style={{
            width: 'calc(33.33% - 1rem)',
            height: '100%'
          }}>
            <div className="rounded-[20px]" style={{
              background: 'linear-gradient(to bottom, #000000, #4a4a4a)',
              width: '100%',
              height: '93.5%',
              marginTop: '6.5%'
            }}></div>
            <div className="absolute flex items-center justify-center" style={{
              right: '20%',
              top: '7%',
              width: '100%',
              height: '100%'
            }}>
              <span className="font-bold text-white" style={{
                fontFamily: 'Monomaniac One',
                fontSize: 'min(19vw, 170px)',
                lineHeight: '1em',
                opacity: 0.8,
                color:'#A39E9E'
              }}>G</span>
            </div>
            <img src="/images/helmet.png" alt="Helmet" className="absolute object-contain" style={{
              left: '15%',
              top: '30%',
              width: '70%',
              height: '50%'
            }} />
            <span className="absolute text-white responsive-text-sm font-normal" style={{
              fontFamily: 'Bebas Neue',
              left: '10.5%',
              top: '16.9%',
              fontSize: 'min(1.1vw, 14px)'
            }}>Scorpion EXO R320 Helmet</span>
            <span className="absolute text-[#FF9900] responsive-text-sm font-normal" style={{
              fontFamily: 'Bebas Neue',
              left: '10.8%',
              top: '10.1%',
              fontSize: 'min(1.1vw, 14px)'
            }}>HELMET</span>
            <span className="absolute text-[#969292] font-normal" style={{
              fontFamily: 'Bebas Neue',
              fontSize: 'min(0.7vw, 8px)',
              left: '73.9%',
              top: '92.9%'
            }}>EXCLUSIVE</span>
            <div className="absolute flex items-center gap-1" style={{
              left: '9.1%',
              top: '92%'
            }}>
               <img src="/images/arrow-vector.png" alt="Arrow" style={{
                width: 'min(0.8vw, 12px)',
                height: 'min(0.4vh, 6px)'
              }} />
              <span className="text-[#FF9900] font-normal" style={{
                fontFamily: 'Bebas Neue',
                fontSize: 'min(0.8vw, 10px)'
              }}>LEARN MORE</span>
             
            </div>
          </div>

          <div className="relative" style={{
            width: 'calc(33.33% - 1rem)',
            height: '100%'
          }}>
            <div className="rounded-[20px]" style={{
              background: 'linear-gradient(to bottom, #000000, #4a4a4a)',
              width: '100%',
              height: '93.5%',
              marginTop: '6.5%'
            }}></div>
            <div className="absolute flex items-center justify-center" style={{
              right: '20%',
              top: '7%',
              width: '100%',
              height: '100%'
            }}>
              <span className="font-bold text-white" style={{
                fontFamily: 'Monomaniac One',
                fontSize: 'min(19vw, 170px)',
                lineHeight: '1em',
                opacity: 0.8,
                color:'#A39E9E'
              }}>U</span>
            </div>
            <img src="/images/gloves-58db9b.png" alt="Gloves" className="absolute object-contain" style={{
              left: '25%',
              top: '30%',
              width: '50%',
              height: '50%'
            }} />
            <span className="absolute text-white responsive-text-sm font-normal" style={{
              fontFamily: 'Bebas Neue',
              left: '9.1%',
              top: '16.9%',
              fontSize: 'min(1.1vw, 14px)'
            }}>Bogotto F-ST Gloves</span>
            <span className="absolute text-[#FF9900] responsive-text-sm font-normal" style={{
              fontFamily: 'Bebas Neue',
              left: '9.1%',
              top: '10.1%',
              fontSize: 'min(1.1vw, 14px)'
            }}>GLOVES</span>
            <span className="absolute text-[#969292] font-normal" style={{
              fontFamily: 'Bebas Neue',
              fontSize: 'min(0.7vw, 8px)',
              left: '73.9%',
              top: '92.9%'
            }}>EXCLUSIVE</span>
            <div className="absolute flex items-center gap-1" style={{
              left: '9.1%',
              top: '92%'
            }}>
              <img src="/images/arrow-vector.png" alt="Arrow" style={{
                width: 'min(0.8vw, 12px)',
                height: 'min(0.4vh, 6px)'
              }} />
              <span className="text-[#FF9900] font-normal" style={{
                fontFamily: 'Bebas Neue',
                fontSize: 'min(0.8vw, 10px)'
              }}>LEARN MORE</span>
              
            </div>
          </div>

          <div className="relative" style={{
            width: 'calc(33.33% - 1rem)',
            height: '100%'
          }}>
            <div className="rounded-[20px]" style={{
              background: 'linear-gradient(to bottom, #000000, #4a4a4a)',
              width: '100%',
              height: '93.9%',
              marginTop: '6.1%'
            }}></div>
            <div className="absolute flex items-center justify-center" style={{
              right: '20%',
              top: '7%',
              width: '100%',
              height: '100%'
            }}>
              <span className="font-bold text-white" style={{
                fontFamily: 'Monomaniac One',
                fontSize: 'min(19vw, 170px)',
                lineHeight: '1em',
                opacity: 0.8,
                color:'#A39E9E'
              }}>N</span>
            </div>
            <img src="/images/jacket.png" alt="Jacket" className="absolute object-contain" style={{
              left: '15%',
              top: '30%',
              width: '70%',
              height: '50%'
            }} />
            <span className="absolute text-white responsive-text-sm font-normal" style={{
              fontFamily: 'Bebas Neue',
              left: '9.4%',
              top: '16.5%',
              fontSize: 'min(1.1vw, 14px)'
            }}>Icon Motorcycle Jacket</span>
            <span className="absolute text-[#FF9900] responsive-text-sm font-normal" style={{
              fontFamily: 'Bebas Neue',
              left: '9.4%',
              top: '9.6%',
              fontSize: 'min(1.1vw, 14px)'
            }}>JACKET</span>
            <span className="absolute text-[#969292] font-normal" style={{
              fontFamily: 'Bebas Neue',
              fontSize: 'min(0.7vw, 8px)',
              left: '73.9%',
              top: '92.9%'
            }}>EXCLUSIVE</span>
            <div className="absolute flex items-center gap-1" style={{
              left: '9.1%',
              top: '92%'
            }}>
              <img src="/images/arrow-vector.png" alt="Arrow" style={{
                width: 'min(0.8vw, 12px)',
                height: 'min(0.4vh, 6px)'
              }} />
              <span className="text-[#FF9900] font-normal" style={{
                fontFamily: 'Bebas Neue',
                fontSize: 'min(0.8vw, 10px)'
              }}>LEARN MORE</span>
              
            </div>
          </div>
        </div>

      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 25s linear infinite;
        }

        .main-content-frame {
          font-size: min(1vw, 1vh);
        }

        .responsive-text-sm {
          font-size: min(1.6vw, 1.6vh, 16px);
        }

        .responsive-text-md {
          font-size: min(2vw, 2vh, 20px);
        }

        .responsive-text-lg {
          font-size: min(3.5vw, 3.5vh, 35px);
        }

        .responsive-text-xl {
          font-size: min(5vw, 5vh, 50px);
        }

        @keyframes modalFadeIn {
          from {
            opacity: 0;
            transform: perspective(1000px) scale(0.8) rotateY(20deg);
          }
          to {
            opacity: 1;
            transform: perspective(1000px) scale(1) rotateY(0deg);
          }
        }
      `}</style>

      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{
            background: 'rgba(0, 0, 0, 0.8)',
            backdropFilter: 'blur(10px)'
          }}
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative max-w-6xl max-h-[90vh] p-8"
            onClick={(e) => e.stopPropagation()}
            style={{
              animation: 'modalFadeIn 0.5s ease-out',
              transform: 'perspective(1000px) rotateY(0deg)',
              transformStyle: 'preserve-3d'
            }}
          >
            <img
              src="/images/bike.png"
              alt="Motorcycle 3D View"
              className="w-full h-auto object-contain rounded-2xl shadow-2xl"
              style={{
                transform: 'perspective(1000px) rotateY(5deg) rotateX(2deg)',
                transition: 'transform 0.3s ease-out',
                filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.5))'
              }}
              onMouseMove={(e: ImageMouseEvent) => {
                const rect = e.target.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;
                const rotateX = (e.clientY - centerY) / 20;
                const rotateY = (e.clientX - centerX) / 20;
                e.target.style.transform = `perspective(1000px) rotateY(${5 + rotateY}deg) rotateX(${2 - rotateX}deg) scale(1.02)`;
              }}
              onMouseLeave={(e: ImageMouseEvent) => {
                e.target.style.transform = 'perspective(1000px) rotateY(5deg) rotateX(2deg) scale(1)';
              }}
            />

            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-white text-3xl font-bold bg-black bg-opacity-50 rounded-full w-12 h-12 flex items-center justify-center hover:bg-opacity-70 transition-all duration-200"
              style={{
                transform: 'perspective(1000px) rotateY(0deg)',
                zIndex: 60
              }}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
