var arr = [
    { frontimg: "https://imgcld.yatra.com/ytimages/image/upload/t_seo_Hotel_w_930_h_550_c_fill_g_auto_q_40_f_jpg/v1397714398/Domestic%20Hotels/Hotels_Chandigarh/JW%20Marriott%20Hotel/Overview.jpg", vido: "https://player.vimeo.com/external/499214303.hd.mp4?s=4c773b2128e0070534a294af649db51babf477e5&profile_id=174&oauth2_token_id=57447761", name: "JW Marriott Hotel, Kolkata",star:"Rating 4.9", desp:" on-site dining options, a fitness center, a spa, and an outdoor infinity pool." },
    { frontimg: "https://a0.muscache.com/im/pictures/miso/Hosting-53983980/original/616c1c73-e91b-496f-8ffc-66cf6e32e045.jpeg?im_w=1200",vido:"https://player.vimeo.com/external/499149422.hd.mp4?s=37d989afe7653318a5cb4b254fb513472b05cfc3&profile_id=174&oauth2_token_id=57447761", name: "The Ritz - Carlton, Bangalore " ,star:"Rating  4.2",desp:"All guests get free Wi-Fi in all rooms and free parking if arriving by car."},
    { frontimg: "https://images.trvl-media.com/lodging/71000000/70890000/70889300/70889285/55cd1c70.jpg?impolicy=resizecrop&rw=598&ra=fit",vido:"https://player.vimeo.com/external/499542152.sd.mp4?s=1e2543bfbcbb90f1fd08567c7246a88993c332c4&profile_id=164&oauth2_token_id=57447761", name: "The Leela Bhartiya, Bangalore" ,star:"Rating  3.4",desp:"Book a stay over ₹ 20,534 at this property and get a free airport taxi."},
    { frontimg: "https://www.tajhotels.com/content/dam/luxury/hotels/Taj_Santacruz/images/gallery/Taj%20Santacruz%20Mumbai.jpg/jcr:content/renditions/cq5dam.web.756.756.jpeg",vido:"https://player.vimeo.com/external/455703289.sd.mp4?s=ff75c85eb8c31c2f5821da04b0995d3d1b73b2ae&profile_id=165&oauth2_token_id=57447761", name: "Taj Santacruz, Mumbai" ,star:"Rating 4.2",desp:" As cities never sleep, there are always something going on, no matter what time!"},
  ]
  var arr2 = [
    { frontimg: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/201382896.jpg?k=345b5b5749228755ab2298081f88b437f84772de1e2b58b9e416eaf15b50746b&o=&hp=1",vido:"https://player.vimeo.com/progressive_redirect/playback/672562163/rendition/360p/360p.mp4?loc=external&oauth2_token_id=57447761&signature=b9b4e7fb2ea2df2a5288b5017ed1af9e0ea11713f3278e494167eae4c56c0ca1", name: "Vivanta, Chennai",star:"Rating 3.1" ,desp:"Book a stay over ₹ 11,517 at this property and get a free airport taxi"},
    { frontimg: "https://a0.muscache.com/im/pictures/ddf82dd9-ca00-44c9-8b43-34b9874d5a93.jpg?im_w=720",vido:"https://player.vimeo.com/external/455703289.sd.mp4?s=ff75c85eb8c31c2f5821da04b0995d3d1b73b2ae&profile_id=165&oauth2_token_id=57447761", name: "Radisson Blu, Mumbai",star:"Rating 5", desp:" cities never sleep, there are always something going on, no matter what time!"},
    { frontimg: "https://a0.muscache.com/im/pictures/miso/Hosting-726354403528841102/original/a636b398-d1c5-4363-86b0-99e4da6621bc.jpeg?im_w=720",vido:"https://player.vimeo.com/progressive_redirect/playback/704793751/rendition/540p?loc=external&oauth2_token_id=57447761&signature=20140837e079b0febcb47fae6bb1fa4bdfbbb033d9f0136bc4c8d1a6f3d6e17c", name: "Four Seasons Hotel , Bangalore",star:"Rating  3.8",desp:" restaurant and fitness center on-site." },
    { frontimg: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/236461888.jpg?k=fa7df06b28f38ecfe39ae92f85d7ff60442e3311efc0573418dc97c484a247d6&o=&hp=1",vido:"https://player.vimeo.com/external/499160382.hd.mp4?s=776da45b671466a53965ab94f2c96c679a2c463c&profile_id=174&oauth2_token_id=57447761", name: "Novotel, Chennai" ,star:"Rating 4.4",desp:" An outdoor swimming pool, gym, free WIFI, comfortable rooms, contactless dining, meeting facilities"},
  ]
  var arr3 = [
    { frontimg: "https://pix8.agoda.net/hotelImages/405/4052/4052_15052917290028047972.jpg?ca=4&ce=1&s=600x", vido: "https://player.vimeo.com/external/422378279.sd.mp4?s=5db5d7f43c9f475169a2b2d49b69b09bb62f86bf&profile_id=165&oauth2_token_id=57447761", name: "Le Meridien, Hyderabad",star:"Rating 4.6",desp: "As cities never sleep, there are always something going on, no matter what time!"},
    { frontimg: "https://pix8.agoda.net/hotelImages/297844/-1/4cd75a8f24bb8f4d1eacea044b74a66c.jpg?ca=7&ce=1&s=450x450",vido:"https://player.vimeo.com/external/499149422.hd.mp4?s=37d989afe7653318a5cb4b254fb513472b05cfc3&profile_id=174&oauth2_token_id=57447761", name: "Trident, Hyderabad" ,star:"Rating 3.9",desp:"Nice hotel right next door to Osho resort, car parking and the Wi-Fi are always free."},
    { frontimg: "https://www.tajhotels.com/content/dam/luxury/hotels/Taj_Mahal_Delhi/images/new-images/taj-mahal-new-delhi-yesterday-today-forever.jpg/jcr:content/renditions/cq5dam.web.756.756.jpeg",vido:"https://player.vimeo.com/external/499160382.hd.mp4?s=776da45b671466a53965ab94f2c96c679a2c463c&profile_id=174&oauth2_token_id=57447761", name: "Mandawa Haveli, Hyderabad",star:"Rating 4.1",desp:"Book a stay over ₹ 20,534 at this property and get a free airport taxi."},
    { frontimg: "https://pix8.agoda.net/hotelImages/43815/-1/b62af9df057069dddb4f13a674a5bdf9.jpg?ca=9&ce=1&s=450x450",vido:"https://player.vimeo.com/external/499152557.hd.mp4?s=5295cec31b16eafdad990ad28b0e2b28c2dc2260&profile_id=174&oauth2_token_id=57447761", name: "The Manohar, Hyderabad" ,star:"Rating 3.3",desp:"Exceeds expectations, right from the time I made a call a day before to check on thing"},
  ]
  
  var clusture = "";
  
  arr.forEach(function (val) {
    clusture += `
    <section class="card-section">
    <a href="room.html">
    <div class="card">
      <div class="flip-card">
        <div class="flip-card__container">
          <div class="card-front">
            <div class="card-front__tp card-front__tp--city">
              <img src="${val.frontimg}" alt="" srcset="">
            </div>
            <div class="card-front__bt">
                <p class="card-front__text-view card-front__text-view--city">
                    ${val.name}
                </p>
            </div>
          </div>
          <div class="card-back">
            <video class="video__container" autoplay muted loop>
              <source class="video__media" src="${val.vido}" type="video/mp4">
            </video>
          </div>
        </div>
      </div>
      <div class="inside-page">
        <div class="inside-page__container">
          <h3 class="inside-page__heading inside-page__heading--city">${val.name}</h3>
          <p class="inside-page__text">${val.desp}</p>
          <span class="star">${val.star}</span>
          <a href="#" class="inside-page__btn inside-page__btn--city">View Details</a>
        </div>
      </div>
    </div>
    </a>
  </section>`
  });
  
  document.querySelector("#card-area").innerHTML = clusture;
  
  var clusture2 = ""
  
  
  arr2.forEach(function (val) {
    clusture2 += `
    <section class="card-section">
    <a href="service.html">
    <div class="card">
      <div class="flip-card">
        <div class="flip-card__container">
          <div class="card-front">
            <div class="card-front__tp card-front__tp--city">
              <img src="${val.frontimg}" alt="" srcset="">
            </div>
            <div class="card-front__bt">
                <p class="card-front__text-view card-front__text-view--city">
                    ${val.name}
                </p>
            </div>
          </div>
          <div class="card-back">
            <video class="video__container" autoplay muted loop>
              <source class="video__media" src="${val.vido}" type="video/mp4">
            </video>
          </div>
        </div>
      </div>
      <div class="inside-page">
        <div class="inside-page__container">
          <h3 class="inside-page__heading inside-page__heading--city">${val.name}</h3>
          <p class="inside-page__text">${val.desp}</p>
          <span class="star">${val.star}</span>
          <a href="#" class="inside-page__btn inside-page__btn--city">View Details</a>
        </div>
      </div>
    </div>
    </a>
  </section>`
  });
  
  document.querySelector("#card-area2").innerHTML = clusture2;
  
  var clusture3 = ""
  
  arr3.forEach(function (val) {
    clusture3 += `
    <section class="card-section">
    <a href="room.html">
    <div class="card">
      <div class="flip-card">
        <div class="flip-card__container">
          <div class="card-front">
            <div class="card-front__tp card-front__tp--city">
              <img src="${val.frontimg}" alt="" srcset="">
            </div>
            <div class="card-front__bt">
                <p class="card-front__text-view card-front__text-view--city">
                    ${val.name}
                </p>
            </div>
          </div>
          <div class="card-back">
            <video class="video__container" autoplay muted loop>
              <source class="video__media" src="${val.vido}" type="video/mp4">
            </video>
          </div>
        </div>
      </div>
      <div class="inside-page">
        <div class="inside-page__container">
          <h3 class="inside-page__heading inside-page__heading--city">${val.name}</h3>
          <p class="inside-page__text">${val.desp}</p>
          <span class="star">${val.star}</span>
          <a href="#" class="inside-page__btn inside-page__btn--city">View Details</a>
        </div>
      </div>
    </div>
    </a>
  </section>`
  });
  
  document.querySelector("#card-area3").innerHTML = clusture3;