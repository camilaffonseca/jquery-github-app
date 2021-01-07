$(function(){
    function AnimateRotate(element) {
        const angle = 0
        const animationSize = window.innerWidth * 60 / 100
        const imagePerimeter = 120 * Math.PI
        const numberOfLaps = animationSize / imagePerimeter
        const lapDegrees = numberOfLaps * 360
        const startsFrom = lapDegrees * -1

        $({deg: startsFrom}).animate({deg: angle}, {
            duration: 2000,
            step: function(now) {
                element.css({
                    transform: 'rotate(' + now + 'deg)'
                })
            }
        })
    }
    

    const inputEl = $('input')
    const buttonEl = $('button')
    const containerEl = $('#container')
    const apiUrl = 'https://api.github.com/users/'
    
    const callback = () => {
        containerEl.html('<p>Loading...</p>')
        $.getJSON(apiUrl + inputEl.val(), data => {
            containerEl.html(`
                <h1>${data.name || 'User name not found!'}</h1>
                <img src="${data.avatar_url}" alt="User Image" />
                <p class="in-animation">${data.bio || 'User bio not found!'}</p>
            `)
            
            const imageEl = $('img')

            $('h1').fadeIn('slow')
            $('p').fadeIn('slow')

            imageEl.animate({left: '0'}, 2000)
            AnimateRotate(imageEl)
        }).catch(() => containerEl.html('User not found! :('))
    }
    
    buttonEl.click(callback)

    $(document).keydown(e => {
        if (e.keyCode == 13) callback()
    })
})
    