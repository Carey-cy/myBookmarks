var allButtons = $('#buttons > button')
for(let i=0; i<allButtons.length;i++){
   $(allButtons[i]).on('click',function(xx){
    var index = $(xx.currentTarget).index()
    var p = index * -275
    $('#images').css({
        transform:'translateX('+ p +'px)'
    })
     m = index
    allButtons.eq(m)
        .addClass('highlight')
        .siblings('.highlight')
        .removeClass('highlight')
   }) 
}
 var m = 0
 var size = allButtons.length
 allButtons.eq(m%size).trigger('click')
 var timeId = setInterval(()=>{
    m+=1
    allButtons.eq(m%size).trigger('click')
},2000)
$('.window').on('mouseenter',function(){
    window.clearInterval(timeId)
})
$('.window').on('mouseleave',function(){
    timeId = setInterval(()=>{
        m+=1
        allButtons.eq(m%size).trigger('click')
    },2000)
})

