$(document).ready(() => {
    $('header button').click(() => {
        $('form').slideDown();
    })

    $("#btn_cancel").click(function (e) { 
        $("form").slideUp();
    });

    $('form').on('submit', (e) => {
        e.preventDefault();
        const end_img_nova = $("#end_img_nova").val();
        const nova_img = $('<li style="display:none"></li>');
        $(`<img src='${end_img_nova}'/>`).appendTo(nova_img);
        $(`
            <div class="overlay-img-link">
                <a href='${end_img_nova}' target='_blank' title='Ver imagem em tamanho real'>Ver imagem em tamanho real</a>
            </div>
        `).appendTo(nova_img);
        $(nova_img).appendTo('ul');
        $(nova_img).fadeIn(250);
        $("#end_img_nova").val('');
    })
})