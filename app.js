$(function(){
    const inputEl = $('input')
    const buttonEl = $('button')
    const containerEl = $('#container')
    const apiUrl = 'https://api.github.com/users/'

    const callback = () => {
        containerEl.html('<p>Loading...</p>')
        $.getJSON(apiUrl + inputEl.val(), data => {
            containerEl.html(`
                <h1>${data.name}</h1>
                <img src="${data.avatar_url}" alt="User Image" />
                <p>${data.bio}</p>
            `)
        }).catch(() => containerEl.html('User not found!'))
    }
    
    buttonEl.click(callback)

    $(document).keydown(e => {
        if (e.keyCode == 13) callback()
    })
})
    