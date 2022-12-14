$(".file-input input").change(function (e) {
    const [file] = e.target.files
    let fileName = file.name
    let fileContainer = $(this).parents(".files")
    $(fileContainer).append(
        `
        <div class="file">
            <span>${fileName}</span>
            <button type="button" class="file__delete">
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.14492 5.50335L10.8602 0.788101C11.0422 0.61234 11.0472 0.32234 10.8714 0.140351C10.6957 -0.0416375 10.4057 -0.0466838 10.2237 0.129077C10.2199 0.132755 10.2161 0.136513 10.2124 0.140351L5.49714 4.8556L0.781887 0.140324C0.599899 -0.035437 0.309898 -0.0303907 0.134136 0.151598C-0.0373305 0.329131 -0.0373305 0.610569 0.134136 0.788101L4.84939 5.50335L0.134136 10.2186C-0.0447121 10.3975 -0.0447121 10.6875 0.134136 10.8663C0.313011 11.0452 0.603012 11.0452 0.781887 10.8663L5.49714 6.1511L10.2124 10.8663C10.3944 11.0421 10.6844 11.0371 10.8601 10.8551C11.0316 10.6775 11.0316 10.3961 10.8601 10.2186L6.14492 5.50335Z" fill="black"/>
                </svg>
            </button>
        </div>
        `
    )

    $(".file__delete").click(function () {
        let parent = $(this).parents(".files")
        clearFileInput(parent)
    })
})

$(".file__delete").click(function () {
    let parent = $(this).parents(".files")
    clearFileInput(parent)
})

function clearFileInput(parent) {
    $(parent).find(".file-input input").val('')
    $(parent).find(".file").remove()
}
