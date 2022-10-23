let render = (response) => {
    let trendingLeftTop = ``;
    let trendingLeftBottom = ``;
    let trendingRight = ``;
    let firstCarousel = ``;
    let secondCarousel = ``;
    let thirdCarousel = ``;
    let fourthCarousel = ``;
    let cateST = ``;
    let catehealth = ``;
    let catelife = ``;
    let catereview = ``;

    for (let i = 0; i <= response.length; i++) {
        trendingLeftTop = 
            `
            <a  href="javascript:getDetailPage()"><img class="treding-left-top-img rounded" src="${response[0].image}" alt="" ></a>
            <div class="treding-left-top-caption mt-1">
                <span class="ST_cate">${response[0].cate}</span>
                <h5 class="treding-left-top-title mt-1"><a href="javascript:getDetailPage()">${response[0].title}</a></h5>
            </div>
            `

        trendingLeftBottom = 
            `
            <div class="col-xl-6 col-md-12 ">
            <a href="javascript:getDetailPage()"><img class="treding-left-bottom-img rounded" src="${response[7].image}" alt="" ></a>
            <div class="treding-left-top-caption mt-1">
                <span class="health_cate">${response[7].cate}</span>
                <h5 class="treding-left-bottom-title  mt-1"> <a href="javascript:getDetailPage()">${response[7].title}</a></h5>
            </div>
        </div>
        <div class="col-xl-6 col-md-12 ">
            <a href="javascript:getDetailPage()"><img class="treding-left-bottom-img rounded" src="${response[8].image}" alt="" ></a>
            <div class="treding-left-bottom-caption mt-1">
                <span class="health_cate">${response[8].cate}</span>
                <h5 class="treding-left-bottom-title  mt-1"> <a href="javascript:getDetailPage()">${response[8].title}</a></h5>
            </div>
        </div> 
           

        `
        trendingRight = 
            `
            <div class="trending-right d-flex pl-1 mb-3 border-bottom pb-3">
                <a href="javascript:getDetailPage()"><img class="treding-right-img rounded" src="${response[1].image}" alt=""></a>
                <div class="treding-right-caption pl-3">
                    <span class="health_cate">${response[1].cate}</span>
                    <h6 class="treding-right-title mt-1"> <a href="javascript:getDetailPage()">${response[1].title}</a></h6>
                </div>
            </div>

            <div class="trending-right d-flex pl-1 border-bottom pb-3">
                <a href="javascript:getDetailPage()"><img class="treding-right-img rounded" src="${response[2].image}" alt=""></a>
                <div class="treding-right-caption pl-3">
                    <span class="life_cate ">${response[2].cate}</span>
                    <h6 class="treding-right-title mt-1"> <a href="javascript:getDetailPage()">${response[2].title}</a></h6>
                </div>
            </div>

            <div class="trending-right d-flex pl-1 border-bottom pb-3 mt-3">
                <a href="javascript:getDetailPage()"><img class="treding-right-img rounded" src="${response[3].image}" alt=""></a>
                <div class="treding-right-caption pl-3">
                    <span class="review_cate">${response[3].cate}</span>
                    <h6 class="treding-right-title mt-1"> <a href="javascript:getDetailPage()">${response[3].title}</a></h6>
                </div>
            </div>

            <div class="trending-right d-flex pl-1 border-bottom pb-3 mt-3">
                <a href="javascript:getDetailPage()"><img class="treding-right-img rounded" src="${response[4].image}" alt=""></a>
                <div class="treding-right-caption pl-3">
                    <span class="ST_cate">${response[4].cate}</span>
                    <h6 class="treding-right-title mt-1"> <a href="javascript:getDetailPage()">${response[4].title}</a></h6>
                </div>
            </div>


            <div class="trending-right d-flex pl-1 border-bottom pb-3 mt-3">
            <a href="javascript:getDetailPage()"><img class="treding-right-img rounded" src="${response[5].image}" alt=""></a>
            <div class="treding-right-caption pl-3">
                <span class="life_cate">${response[5].cate}</span>
                <h6 class="treding-right-title mt-1"> <a href="javascript:getDetailPage()">${response[5].title}</a></h6>
            </div>
            </div>

            <div class="trending-right d-flex pl-1 border-bottom pb-3 mt-3">
            <a href="javascript:getDetailPage()"><img class="treding-right-img rounded" src="${response[6].image}" alt=""></a>
            <div class="treding-right-caption pl-3">
                <span class="review_cate">${response[6].cate}</span>
                <h6 class="treding-right-title mt-1"> <a href="javascript:getDetailPage()">${response[6].title}</a></h6>
            </div>
            </div>

            `

        firstCarousel = 
            `
            <a href="javascript:getDetailPage()"><img class="whats-new-img" src="${response[9].image}" alt=""></a>
            <div class="silde-caption">
                <div class="d-flex  justify-content-between g-0 mt-2">
                    <span class="review_cate">${response[9].cate}</span>
                    <div id="date1" class="date p-0">${response[9].date_create}</div>
                </div>
                <h5><a class="silde-caption-title mt-2" href="javascript:getDetailPage()">${response[9].title}</a></h5>
            </div>
        `
        secondCarousel = 
            `
            <a href="javascript:getDetailPage()"><img class="whats-new-img" src="${response[11].image}" alt=""></a>
            <div class="silde-caption">
                <div class="d-flex  justify-content-between g-0 mt-2">
                    <span class="ST_cate">${response[11].cate}</span>
                    <div id="date1" class="date p-0">${response[11].date_create}</div>
                </div>
                <h5><a class="silde-caption-title mt-2" href="javascript:getDetailPage()">${response[11].title}</a></h5>
            </div>
           

        `

        thirdCarousel = 
        `
        <a href="javascript:getDetailPage()"><img class="whats-new-img" src="${response[12].image}" alt=""></a>
            <div class="silde-caption">
                <div class="d-flex  justify-content-between g-0 mt-2">
                    <span class="health_cate">${response[12].cate}</span>
                    <div id="date1" class="date p-0">${response[12].date_create}</div>
                </div>
                <h5><a class="silde-caption-title mt-2" href="javascript:getDetailPage()">${response[12].title}</a></h5>
            </div>
       

        `
        fourthCarousel = 
        `
        <a href="javascript:getDetailPage()"><img class="whats-new-img" src="${response[10].image}" alt=""></a>
            <div class="silde-caption">
                <div class="d-flex  justify-content-between g-0 mt-2">
                    <span class="life_cate">${response[10].cate}</span>
                    <div id="date1" class="date p-0">${response[10].date_create}</div>
                </div>
                <h5><a class="silde-caption-title mt-2" href="javascript:getDetailPage()">${response[10].title}</a></h5>
            </div>
       

        `
        cateST = `
      
        <div class="row d-flex justify-content-between align-items-center categories-news-content">
        <div class="col-8 float-left ">
        <span class="date pb-5">${response[11].date_create}</span>
        <a href="javascript:getDetailPage()"><h5 class="categories-title">${response[11].title}</h6>
        </a>
        <p class="categories-description">${response[11].description}</h5>
        </div>
        <div class="col-4 float-right ">
        <a href="javascript:getDetailPage()"><img class="categories-img rounded" src="${response[11].image}" alt="">
        </a>
        </div>

        </div>
       

        <div class="row d-flex justify-content-between align-items-center categories-news-content">
            <div class="col-8 float-left ">
            <span class="date pb-5">${response[0].date_create}</span>
            <a href="javascript:getDetailPage()"><h5 class="categories-title">${response[0].title}</h6>
            </a>
            <p class="categories-description">${response[0].description}</h5>
            </div>
            <div class="col-4 float-right ">
            <a href="javascript:getDetailPage()"><img class="categories-img rounded" src="${response[0].image}" alt="">
            </a>
            </div>
        </div>

        <div class="row d-flex justify-content-between align-items-center categories-news-content">
            <div class="col-8 float-left ">
            <span class="date pb-5">${response[4].date_create}</span>
            <a href="javascript:getDetailPage()"><h5 class="categories-title">${response[4].title}</h6>
            </a>
            <p class="categories-description">${response[4].description}</h5>
            </div>
            <div class="col-4 float-right ">
            <a href="javascript:getDetailPage()"><img class="categories-img rounded" src="${response[4].image}" alt="">
            </a>
            </div>
        </div>
        `
        catehealth = `
        <div class="row d-flex justify-content-between align-items-center categories-news-content">
            <div class="col-8 float-left ">
            <span class="date pb-5">${response[12].date_create}</span>
            <a href="javascript:getDetailPage()"><h5 class="categories-title">${response[12].title}</h6>
            </a>
            <p class="categories-description">${response[12].description}</h5>
            </div>
            <div class="col-4 float-right ">
            <a href="javascript:getDetailPage()"><img class="categories-img rounded" src="${response[12].image}" alt="">
            </a>
            </div>
        </div>

        <div class="row d-flex justify-content-between align-items-center categories-news-content">
            <div class="col-8 float-left ">
            <span class="date pb-5">${response[1].date_create}</span>
            <a href="javascript:getDetailPage()"><h5 class="categories-title">${response[1].title}</h6>
            </a>
            <p class="categories-description">${response[1].description}</h5>
            </div>
            <div class="col-4 float-right ">
            <a href="javascript:getDetailPage()"><img class="categories-img rounded" src="${response[1].image}" alt="">
            </a>
            </div>
        </div>

        <div class="row d-flex justify-content-between align-items-center categories-news-content">
            <div class="col-8 float-left ">
            <span class="date pb-5">${response[7].date_create}</span>
            <a href="javascript:getDetailPage()"><h5 class="categories-title">${response[7].title}</h6>
            </a>
            <p class="categories-description">${response[7].description}</h5>
            </div>
            <div class="col-4 float-right ">
            <a href="javascript:getDetailPage()"><img class="categories-img rounded" src="${response[7].image}" alt="">
            </a>
            </div>
        </div>

        `

        catelife = `
        <div class="row d-flex justify-content-between align-items-center categories-news-content">
            <div class="col-8 float-left ">
            <span class="date pb-5">${response[10].date_create}</span>
            <a href="javascript:getDetailPage()"><h5 class="categories-title">${response[10].title}</h6>
            </a>
            <p class="categories-description">${response[10].description}</h5>
            </div>
            <div class="col-4 float-right ">
            <a href="javascript:getDetailPage()"><img class="categories-img rounded" src="${response[10].image}" alt="">
            </a>
            </div>
        </div>

        <div class="row d-flex justify-content-between align-items-center categories-news-content">
            <div class="col-8 float-left ">
            <span class="date pb-5">${response[5].date_create}</span>
            <a href="javascript:getDetailPage()"><h5 class="categories-title">${response[5].title}</h6>
            </a>
            <p class="categories-description">${response[5].description}</h5>
            </div>
            <div class="col-4 float-right ">
            <a href="javascript:getDetailPage()"><img class="categories-img rounded" src="${response[5].image}" alt="">
            </a>
            </div>
        </div>

        <div class="row d-flex justify-content-between align-items-center categories-news-content">
            <div class="col-8 float-left ">
            <span class="date pb-5">${response[2].date_create}</span>
            <a href="javascript:getDetailPage()"><h5 class="categories-title">${response[2].title}</h6>
            </a>
            <p class="categories-description">${response[2].description}</h5>
            </div>
            <div class="col-4 float-right ">
            <a href="javascript:getDetailPage()"><img class="categories-img rounded" src="${response[2].image}" alt="">
            </a>
            </div>
        </div>

        `

        catereview = `
        <div class="row d-flex justify-content-between align-items-center categories-news-content">
            <div class="col-8 float-left ">
            <span class="date pb-5">${response[9].date_create}</span>
            <a href="javascript:getDetailPage()"><h5 class="categories-title">${response[9].title}</h5>
            </a>
            <p class="categories-description">${response[9].description}</p>
            </div>
            <div class="col-4 float-right ">
            <a href="javascript:getDetailPage()"><img class="categories-img rounded" src="${response[9].image}" alt="">
            </a>
            </div>
        </div>

        <div class="row d-flex justify-content-between align-items-center categories-news-content">
            <div class="col-8 float-left ">
            <span class="date pb-5">${response[6].date_create}</span>
            <a href="javascript:getDetailPage()"><h5 class="categories-title">${response[6].title}</h6>
            </a>
            <p class="categories-description">${response[6].description}</h5>
            </div>
            <div class="col-4 float-right ">
            <a href="javascript:getDetailPage()"><img class="categories-img rounded" src="${response[6].image}" alt="">
            </a>
            </div>
        </div>

        <div class="row d-flex justify-content-between align-items-center categories-news-content categories-news-content-none-border">
            <div class="col-8 float-left ">
            <span class="date pb-5">${response[3].date_create}</span>
            <a href="javascript:getDetailPage()"><h5 class="categories-title">${response[3].title}</h6>
            </a>
            <p class="categories-description">${response[3].description}</h5>
            </div>
            <div class="col-4 float-right ">
            <a href="javascript:getDetailPage()"><img class="categories-img rounded" src="${response[3].image}" alt="">
            </a>
            </div>
        </div>

        `
    }

    $('.treding-left-top').html(trendingLeftTop)
    $('.trending-left-bottom').html(trendingLeftBottom)
    $('.trending-right').html(trendingRight)
    $('.first-carousel').html(firstCarousel)
    $('.second-carousel').html(secondCarousel)
    $('.third-carousel').html(thirdCarousel)
    $('.fourth-carousel').html(fourthCarousel)
    $('.categories-ST-news-left').html(cateST)
    $('.categories-health-news-left').html(catehealth)
    $('.categories-life-news-left').html(catelife)
    $('.categories-review-news-left').html(catereview)
}

// Owl-Carousel
$(document).ready(function () {
    $('.what-new .owl-carousel').owlCarousel({
        items: 1,
        loop:true,
        margin:10,
        nav:true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 1000,
        smartSpeed: 1000,
        autoplayHoverPause: true,
        responsive:{
          0:{
            items:1,
            nav: false
          },
          768:{
            items:3
          },
          1000:{
            items:3
          }
        }
    })

    $(window).scroll(function(event){
        var position = $('html,body').scrollTop();
        if (position>300) {
            $('.to-top').css('opacity','1')
        }
        else {
            $('.to-top').css('opacity','0')
        }
    })

    $('.to-top').click(function(event){
        $('html,body').animate({
            scrollTop: 0},500)
    })
    
    $(window).on('load',function(event){
        $('.loader').delay(800).fadeOut('fast')
    })
})



// Current Date 
let currentDate = () => {
    let d = new Date();
    let year = d.getFullYear();
    let month = d.getMonth() + 1;
    let day = d.getDate();
    let dayofweek = d.getDay();
    
    const dayname = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    
    let e = dayname[dayofweek] + ', ' + day + '/' + month+ '/'+ year;
    document.getElementById("date").innerHTML = e;
}
currentDate()


// Search feature
let search = () => {
    let keyword = $('#tab-search').val();

    $.ajax({
        type: "GET",
        url: `https://623a9803b5292b8bfcb71f0f.mockapi.io/api/v1/news`,
        dataType: "json",
        success: function (response, status) {
          let result = JSON.stringify(response);
        
          if (response) {
              findNews(response,keyword)
              render (response)
              
          }
          else {
              console.log('Not Found')
          }
        },
    });
}
search();

let findNews = (result,keyword) => {
    for (let i = 0; i < result.length; i++) {
        if (keyword == result[i].title) {
            displayResult(result[i])
        }
    }
}

// Display Search Result
let displayResult = (news) => {
    let displaySearchResult = ``;
    displaySearchResult = 
    `
    <div class="row d-flex justify-content-between align-items-center categories-news-content">
        <div class="col-8 float-left">
            <span class="date pb-5">${news.date_create}</span>
            <a  href="javascript:getDetailPage()"><h5 class="categories-title">${news.title}</h5></a>
            <p class="categories-description">${news.description}</p>
        </div>
        <div class="col-4 float-right ">
            <a href="javascript:getDetailPage()"><img class="categories-img rounded" src="${news.image}" alt="">
            </a>
        </div>
    </div>
    </div>
    `
    $('main').html(displaySearchResult)
    localStorage.setItem("currentNews", JSON.stringify(news));

}

// Display Detail Page
let getDetailPage = () => {
    let news = JSON.parse(localStorage.getItem("currentNews"));
    let displayDetailPage = ``;

    displayDetailPage = 
    `
            <div class="row main-detail-page">
                <h2 class="border-bottom pb-3 mb-3">${news.title}</h2>
                <div class="col-lg-7 col-md-6 detail-page-left-col">
                    <div class="detail-page-date mb-2 d-flex justify-content-between">
                        <div>
                            <span class="author">${news.author}</span>
                            <span class="date">${news.date_create}</span>
                        </div>
                        <div>
                            <span class="cate">${news.cate}</span>
                        </div>
                        
                    </div>
                    <div>
                        <a href=""><img class="detail-page-img rounded mb-3" src="${news.image}" alt=""></a>
                    </div>
                    <div class="detail-page-content">${news.content}</div>

                    <div class="form-group textarea mt-5">
                        <h5>Comment (3)</h5>
                        <textarea id="story" name="story" rows="5" cols="33" class="text-muted">Your comment...</textarea>
                        <a href="#"><i class="fa-solid fa-face-smile smile"></i></a>
                    </div>

                    <div class="comment-form mt-3 mb-3">
                        <h5 class="border-bottom">Most relevant</h5>
                        <div class="row d-flex align-items-center mb-3 mt-3">
                            <div class="col-lg-1 col-md-2">
                                <a href="#"><img src="./img/Avatar-hai-1.jpg" class="avatar" alt="Avatar"> </a>
                            </div>

                            <div class="col-lg-4 col-md-6 d-flex flex-column">
                                <span class="mr-3 name">Antonio Moreno</span> 
                                <a href=""><i class="fa-solid fa-thumbs-up"> <small>17</small> </i></a>
                            </div>
                            <div class="col-lg-5 col-md-4">
                                <p>Good news!!!</p>
                            </div>
                        </div>
                        <div class="row d-flex align-items-center mb-3">
                            <div class="col-lg-1 col-md-2">
                                <a href="#"><img src="./img/avatar-cute-24.jpg" class="avatar" alt="Avatar"> </a>
                            </div>

                            <div class="col-lg-4 col-md-6 d-flex flex-column">
                                <span class="mr-3 name">Paula Wilson</span> 
                                <a href=""><i class="fa-solid fa-thumbs-up"> <small>10</small> </i></a>
                            </div>
                            <div class="col-lg-5 col-md-4">
                                <p>Thank a lot!!!</p>
                            </div>
                        </div>

                        <div class="row d-flex align-items-center mb-3">
                            <div class="col-lg-1 col-md-2">
                                <a href="#"><img src="./img/avatar-chibi-avatar-cute-anh-dai-dien-chibi-dep-1.jpg" class="avatar" alt="Avatar"> </a>
                            </div>

                            <div class="col-lg-4 col-md-6 d-flex flex-column">
                                <span class="mr-3 name">Mary Saveley</span> 
                                <a href=""><i class="fa-solid fa-thumbs-up"> <small>23</small> </i></a>
                            </div>
                            <div class="col-lg-5 col-md-4">
                                <p>Following...</p>
                            </div>
                        </div>
                    </div>
                </div>  
                <div class="col-lg-5 col-md-6 detail-page-right-col">
                    <h5 class="text-muted">Reated Posts</h5>
                    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                        <div class="carousel-inner">
                          <div class="carousel-item active">
                            <a href="javascript:getDetailPage()"><img class="d-block w-100 rounded" src="https://i.insider.com/625050a1ee61990018ddc658?width=1300&format=jpeg&auto=webp" alt="First slide"></a>
                            <a href="javascript:getDetailPage()"><h5>10 of the coolest things you can do in San Diego, plus the 4 best beaches to go to while you're here</h5></a>
                          </div>
                          <div class="carousel-item">
                            <a href="javascript:getDetailPage()"><img class="d-block w-100 rounded" src="https://i.insider.com/624bd0a582200b00194407d5?width=1300&format=jpeg&auto=webp" alt="First slide"></a>
                            <a href="javascript:getDetailPage()"><h5>McDonald's spicy chicken burger, the McSpicy, has a cult following in Singapore. I ordered it to see what the fuss is all about</h5></a>
                        </div>
                          <div class="carousel-item">
                            <a href="javascript:getDetailPage()"><img class="d-block w-100 rounded" src="https://i.insider.com/624fb9eacc973200187b7b31?width=2000&format=jpeg&auto=webp" alt="First slide"></a>
                            <a href="javascript:getDetailPage()"><h5>China took a rural village at the foot of the Great Wall, turned it into a replica of an ancient canal town</h5></a>
                        </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                          <span class="carousel-control-next-icon" aria-hidden="true"></span>
                          <span class="sr-only">Next</span>
                        </a>
                      </div>
                </div>
            </div>
    `
    $('main').html(displayDetailPage)
    
}


let animate_string = () => {
    const element = document.getElementById('target');
    const textNode = element.firstChild;
    let text = textNode.data;
    setInterval(() => {
        text = text[text.length - 1] + text.substring(0, text.length - 1);
        textNode.data = text;
    }, 100);
}
animate_string()





