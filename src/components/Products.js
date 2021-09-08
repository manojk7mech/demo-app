const Products = () => {
    return ( 
        <>
         {/* <div className="dark:bg-gray-700">
              <h1 className="text-2xl font-bold text-center uppercase p-2 bg-gradient-to-r from-purple-400 dark:from-pink-200 to-pink-500 dark:to-pink-200 text-transparent bg-clip-text my-4">Select from the world class products of ours!</h1>
              <h3 className="text-center font-semibold text-xl m-1.5 dark:text-gray-300 text-gray-700">Why should you buy from us ?????</h3>
              <h3 className="text-center font-semibold text-xl m-1.5 dark:text-gray-300 text-gray-700">Don't worry, We got you covered...</h3>
              <div className="flex justify-center">
                  <div className="flex-col mt-3">
                      <div className="flex items-center m-1">
                          <svg className="h-5 w-5 mr-2 text-blue-500 dark:text-green-600" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                          </svg>
                          <p className="font-serif text-gray-800 dark:text-gray-200">Different varieties of products to choose from...</p>
                      </div>
                      <div className="flex items-center m-1">
                          <svg className="h-5 w-5 mr-2 text-blue-500 dark:text-green-600" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                          </svg>
                          <p className="font-serif text-gray-800 dark:text-gray-200">Various types of colors...</p>
                      </div>
                      <div className="flex items-center m-1">
                          <svg className="h-5 w-5 mr-2 text-blue-500 dark:text-green-600" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                          </svg>
                          <p className="font-serif text-gray-800 dark:text-gray-200">Designs that look amazing...</p>
                      </div>
                      <div className="flex items-center m-1">
                          <svg className="h-5 w-5 mr-2 text-blue-500 dark:text-green-600" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                          </svg>
                          <p className="font-serif text-gray-800 dark:text-gray-200">Thousands of items in each category...</p>
                      </div>
                  </div>
              </div>
              <h5 className="text-center font-semibold text-xl m-3 dark:text-blue-200 text-blue-800">Choose from the following products! Okay...</h5>
              <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
                  <div className="flex-col items-center m-3 rounded-md overflow-hidden shadow-md hover:shadow-lg bg-gray-200 dark:bg-gray-600">
                      <div className="flex justify-center">
                          <img className="h-48 w-full object-cover" src="/images/earphone-1.jpg" alt="Earphone-1" />
                      </div>
                      <div className="flex justify-center mt-2">
                          <span className="text-blue-800 dark:text-green-300 font-semibold ">Nokia Earphone-1</span>
                      </div>
                      <div className="flex justify-between items-center">
                          <span className="font-semibold text-gray-700 dark:text-gray-300 mx-2">Rs.799</span>
                          <button className="flex justify-center items-center my-2 mx-2 py-1 px-2 rounded-3xl border-blue-800 dark:border-gray-200 border dark:text-blue-100 hover:text-blue-50 dark:hover:bg-gray-600 hover:bg-gray-400" type="submit">
                              <svg className="h-6 w-6 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <span className="font-semibold">Buy</span>
                          </button>
                      </div>
                  </div>
                  <div className="flex-col items-center m-3 rounded-md overflow-hidden shadow-md cursor-pointer hover:shadow-lg bg-gray-200 dark:bg-gray-600">
                      <div className="flex justify-center">
                          <img className="h-48 w-full object-cover" src="/images/headphone-1.jpg" alt="Headphone-1" />
                      </div>
                      <div className="flex justify-center mt-2">
                          <span className="text-blue-800 dark:text-green-300 font-semibold">Nokia Headphone-1</span>
                      </div>
                      <div className="flex justify-between items-center">
                          <span className="font-semibold text-gray-700 dark:text-gray-300 mx-2">Rs.1499</span>
                          <button className="flex justify-center items-center my-2 mx-2 py-1 px-2 rounded-3xl border-blue-800 dark:border-gray-200 border dark:text-blue-100 hover:text-blue-50 dark:hover:bg-gray-600 hover:bg-gray-400" type="submit">
                              <svg className="h-6 w-6 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <span className="font-semibold">Buy</span>
                          </button>
                      </div>
                  </div>
                  <div className="flex-col items-center m-3 rounded-md overflow-hidden shadow-md cursor-pointer hover:shadow-lg bg-gray-200 dark:bg-gray-600">
                      <div className="flex justify-center">
                          <img className="h-48 w-full object-cover" src="/images/iphone-1.jpg" alt="Apple i-phone" />
                      </div>
                      <div className="flex justify-center mt-2">
                          <span className="text-blue-800 dark:text-green-300 font-semibold">Apple i-phone-10X</span>
                      </div>
                      <div className="flex justify-between items-center">
                          <span className="font-semibold text-gray-700 dark:text-gray-300 mx-2">Rs.55999</span>
                          <button className="flex justify-center items-center my-2 mx-2 py-1 px-2 rounded-3xl border-blue-800 dark:border-gray-200 border dark:text-blue-100 hover:text-blue-50 dark:hover:bg-gray-600 hover:bg-gray-400" type="submit">
                              <svg className="h-6 w-6 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <span className="font-semibold">Buy</span>
                          </button>
                      </div>
                  </div>
                  <div className="flex-col items-center m-3 rounded-md overflow-hidden shadow-md cursor-pointer hover:shadow-lg bg-gray-200 dark:bg-gray-600">
                      <div className="flex justify-center">
                          <img className="h-48 w-full object-cover" src="/images/keyboard-1.jpg" alt="Dell Keyboard" />
                      </div>
                      <div className="flex justify-center mt-2">
                          <span className="text-blue-800 dark:text-green-300 font-semibold">Dell Keyboard - 255R</span>
                      </div>
                      <div className="flex justify-between items-center">
                          <span className="font-semibold text-gray-700 dark:text-gray-300 mx-2">Rs.1599</span>
                          <button className="flex justify-center items-center my-2 mx-2 py-1 px-2 rounded-3xl border-blue-800 dark:border-gray-200 border dark:text-blue-100 hover:text-blue-50 dark:hover:bg-gray-600 hover:bg-gray-400" type="submit">
                              <svg className="h-6 w-6 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <span className="font-semibold">Buy</span>
                          </button>
                      </div>
                  </div>
                  <div className="flex-col items-center m-3 rounded-md overflow-hidden shadow-md cursor-pointer hover:shadow-lg bg-gray-200 dark:bg-gray-600">
                      <div className="flex justify-center">
                          <img className="h-48 w-full object-cover" src="/images/android-phone-1.jpg" alt="Nokia SmartPhone" />
                      </div>
                      <div className="flex justify-center mt-2">
                          <span className="text-blue-800 dark:text-green-300 font-semibold">Nokia SmartPhone - XL</span>
                      </div>
                      <div className="flex justify-between items-center">
                          <span className="font-semibold text-gray-700 dark:text-gray-300 mx-2">Rs.17599</span>
                          <button className="flex justify-center items-center my-2 mx-2 py-1 px-2 rounded-3xl border-blue-800 dark:border-gray-200 border dark:text-blue-100 hover:text-blue-50 dark:hover:bg-gray-600 hover:bg-gray-400" type="submit">
                              <svg className="h-6 w-6 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <span className="font-semibold">Buy</span>
                          </button>
                      </div>
                  </div>
                  <div className="flex-col items-center m-3 rounded-md overflow-hidden shadow-md cursor-pointer hover:shadow-lg bg-gray-200 dark:bg-gray-600">
                      <div className="flex justify-center">
                          <img className="h-48 w-full object-cover" src="/images/charger-1.jpg" alt=">USB Charger" />
                      </div>
                      <div className="flex justify-center mt-2">
                          <span className="text-blue-800 dark:text-green-300 font-semibold">USB Charger - M</span>
                      </div>
                      <div className="flex justify-between items-center">
                          <span className="font-semibold text-gray-700 dark:text-gray-300 mx-2">Rs.699</span>
                          <button className="flex justify-center items-center my-2 mx-2 py-1 px-2 rounded-3xl border-blue-800 dark:border-gray-200 border dark:text-blue-100 hover:text-blue-50 dark:hover:bg-gray-600 hover:bg-gray-400" type="submit">
                              <svg className="h-6 w-6 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <span className="font-semibold">Buy</span>
                          </button>
                      </div>
                  </div>
                  <div className="flex-col items-center m-3 rounded-md overflow-hidden shadow-md cursor-pointer hover:shadow-lg bg-gray-200 dark:bg-gray-600">
                      <div className="flex justify-center">
                          <img className="h-48 w-full object-cover" src="/images/powerbank-1.jpg" alt=">Powerbank" />
                      </div>
                      <div className="flex justify-center mt-2">
                          <span className="text-blue-800 dark:text-green-300 font-semibold">Powerbank - 20000mAh</span>
                      </div>
                      <div className="flex justify-between items-center">
                          <span className="font-semibold text-gray-700 dark:text-gray-300 mx-2">Rs.2999</span>
                          <button className="flex justify-center items-center my-2 mx-2 py-1 px-2 rounded-3xl border-blue-800 dark:border-gray-200 border dark:text-blue-100 hover:text-blue-50 dark:hover:bg-gray-600 hover:bg-gray-400" type="submit">
                              <svg className="h-6 w-6 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <span className="font-semibold">Buy</span>
                          </button>
                      </div>
                  </div>
                  <div className="flex-col items-center m-3 rounded-md overflow-hidden shadow-md cursor-pointer hover:shadow-lg bg-gray-200 dark:bg-gray-600">
                      <div className="flex justify-center">
                          <img className="h-48 w-full object-cover" src="/images/usb-cable-1.jpg" alt=">USB Cable" />
                      </div>
                      <div className="flex justify-center mt-2">
                          <span className="text-blue-800 dark:text-green-300 font-semibold">USB Cable - 2m</span>
                      </div>
                      <div className="flex justify-between items-center">
                          <span className="font-semibold text-gray-700 dark:text-gray-300 mx-2">Rs.349</span>
                          <button className="flex justify-center items-center my-2 mx-2 py-1 px-2 rounded-3xl border-blue-800 dark:border-gray-200 border dark:text-blue-100 hover:text-blue-50 dark:hover:bg-gray-600 hover:bg-gray-400" type="submit">
                              <svg className="h-6 w-6 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <span className="font-semibold">Buy</span>
                          </button>
                      </div>
                  </div>
                  <div className="flex-col items-center m-3 rounded-md overflow-hidden shadow-md cursor-pointer hover:shadow-lg bg-gray-200 dark:bg-gray-600">
                      <div className="flex justify-center">
                          <img className="h-48 w-full object-cover" src="/images/speaker-1.jpg" alt="Speaker" />
                      </div>
                      <div className="flex justify-center mt-2">
                          <span className="text-blue-800 dark:text-green-300 font-semibold">Speaker 40W-Bass</span>
                      </div>
                      <div className="flex justify-between items-center">
                          <span className="font-semibold text-gray-700 dark:text-gray-300 mx-2">Rs.9999</span>
                          <button className="flex justify-center items-center my-2 mx-2 py-1 px-2 rounded-3xl border-blue-800 dark:border-gray-200 border dark:text-blue-100 hover:text-blue-50 dark:hover:bg-gray-600 hover:bg-gray-400" type="submit">
                              <svg className="h-6 w-6 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <span className="font-semibold">Buy</span>
                          </button>
                      </div>
                  </div>
              </div>
          </div> */}
        </>
    );
}
 
export default Products;