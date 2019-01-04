var allButtons = $('#buttons > button')
for(let i=0; i<allButtons.length;i++){
   $(allButtons[i]).on('click',function(xx){
    var index = $(xx.currentTarget).index()
    var p = index * -275
    $('#images').css({
        transform:'translateX('+ p +'px)'
    })
     m = index
    activeButton(allButtons.eq(m))
   }) 
}
 var m = 0
 var size = allButtons.length
    playSlide(m%size)
 var timeId = setTimer()

function activeButton($button){
    $button
        .addClass('highlight')
        .siblings('.highlight')
        .removeClass('highlight')
}
function playSlide(index){
    allButtons.eq(index).trigger('click')
}
function setTimer (){
    setInterval(()=>{
        m+=1
        playSlide(m%size)
    },2000)
}


$('.window').on('mouseenter',function(){
    window.clearInterval(timeId)
})
$('.window').on('mouseleave',function(){
    timeId = setTimer()
})

