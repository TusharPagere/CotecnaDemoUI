function fileUpload(){
    /* Click to close lightbox */
    //$('.close, .backdrop').click(function()
    //{
        
        // $('.close.backdrop').animate({'opacity':'0'}, 300, 'linear', function()
        // {
        //     $('.backdrop').css('display', 'none');
        // });
        // $('.lightbox').fadeOut();
    
        /* Open lightbox on button click */
        //$('.lightbox-toggle').click(function(){
           
        $('.backdrop').animate({'opacity':'.50'}, 200, 'linear').css('display', 'block');
        $('.lightbox').fadeIn();
//});
}

function blackdrop(){
    $('.backdrop').animate({'opacity':'.50'}, 200, 'linear').css('display', 'block');
}
function blackdropClose(){
    $('.backdrop').animate({'opacity':'0'}, 200, 'linear').css('display', 'none');
}
function fileClosed(){

    $('.close.backdrop').animate({'opacity':'0'}, 300, 'linear', function()
    {
        $('.backdrop').css('display', 'none');
    });
    $('.lightbox').fadeOut();
    
}


function uploadFile(){
    /* Click to close lightbox */
    //$('.close, .backdrop').click(function()
    //{
        
        $('.close.backdrop').animate({'opacity':'0'}, 300, 'linear', function()
        {
            $('.backdrop').css('display', 'none');
        });
        $('.lightboxUpload').fadeOut();
    
        /* Open lightbox on button click */
        //$('.lightbox-toggle').click(function(){
        $('.backdrop').animate({'opacity':'.50'}, 200, 'linear').css('display', 'block');
        $('.lightboxUpload').fadeIn();
//});
}
function fileClosed(){

    $('.close.backdrop').animate({'opacity':'0'}, 300, 'linear', function()
    {
        $('.backdrop').css('display', 'none');
    });
    $('.lightboxUpload').fadeOut();
    
}

function sidebarCollapse()
{
    $('#sidebar').toggleClass('active');
    $("#sidebarCollapse").toggleClass('active');
    $('#content').toggleClass('w-100');
}

function sidebarHeightHide(){
    $(".components").removeClass("sidebar-height");
}

function sidebarHeightShow(){
    $(".components").addClass("sidebar-height");
}
      
//$(document).on(ready(function () {
    
    $('#sidebar ul.list-unstyled li a').on('click', function () {
          $('#sidebar ul.list-unstyled li').removeClass('active');
          $(this).parent().addClass('active');
      });
      
      /*$('.threadMesg-inti .downArrow').click(function(){
        $('.threadMesg-inti-list-dropdown').toggleClass('d-n');
    });*/

    

//}));

// new & event dropdown

function clickNewsEvent(){
   
    if($('.upload-dropdown-opt').hasClass("d-n")){
        $('.upload-dropdown-opt').removeClass('d-n');
      }
      else{
          $('.upload-dropdown-opt').addClass('d-n');
      }
}

// dropdown new & edit

function editdropdown()
{
    
        if($('.threadEdit-dropdown').hasClass("d-n")){
          $('.threadEdit-dropdown').removeClass('d-n');
        }
        else{
            $('.threadEdit-dropdown').addClass('d-n');
        }
   
}

//initial name dropdown

function intidropdown()
{
    
        if($('.threadMesg-inti-list-dropdown').hasClass("d-n")){
          $('.threadMesg-inti-list-dropdown').removeClass('d-n');
        }
        else{
            $('.threadMesg-inti-list-dropdown').addClass('d-n');
        }
   
}

// change sorting icon

function flipsorticon()
{
    
    $('.glyphicon-sort-by-attributes').toggleClass('flipsorticon');
      
}

function threadActiveList(eve)
{
    $('.threadlist').removeClass('activeThread')
    $(eve).closest('.threadlist').addClass('activeThread');
}

function submenuActiveList(eve)
{
    
    $('.submenulist').removeClass('active')
    $(eve).closest('.submenulist').addClass('active');
}

function hidePreDate(){
    var dtToday = new Date();
    var month = dtToday.getMonth() + 1;
    var day = dtToday.getDate();
    var year = dtToday.getFullYear();
    if(month < 10)
        month = '0' + month.toString();
    if(day < 10)
        day = '0' + day.toString();
    var minDate= year + '-' + month + '-' + day;
    $('#txtDate').attr('min', minDate);
    $('#EventDate').attr('min', minDate);
  
  }





