let inputCounter = document.querySelectorAll('.number');
let menuItemBlockBottom = document.querySelectorAll('.menu-item__block-bottom');
let menuItem = document.querySelectorAll('.menu-item');
let BtnCount = document.querySelectorAll('.menu-item-btn');
let closeOrderItem = document.querySelectorAll('.close__order-item');
const itemInput = document.querySelectorAll('.menu-page .menu-item input');


// *****BURGER********
let body = document.querySelector('body')
let burgerBtn = document.querySelector('.burger-menu');
let menuContent = document.querySelector('.dropdown-menu__mobile');


burgerBtn.addEventListener('click', function () {
    console.log(1234)
    if (menuContent.classList.contains('flex') === false) {
        menuContent.classList.add('flex');
        burgerBtn.classList.add('burger-close');
        menuContent.classList.remove('hide');

    } else {
        console.log(123)
        menuContent.classList.remove('flex');
        burgerBtn.classList.remove('burger-close');
        menuContent.classList.add('hide');

    }
})


// tabs
$(document).ready(function () {

    var tabWrapper = $('#tab-block'),
        tabMnu = tabWrapper.find('.tab-mnu  li'),
        tabContent = tabWrapper.find('.tab-cont > .tab-pane');

    tabContent.not(':first-child').hide();

    tabMnu.each(function (i) {
        $(this).attr('data-tab', 'tab' + i);
    });
    tabContent.each(function (i) {
        $(this).attr('data-tab', 'tab' + i);
    });

    tabMnu.click(function () {
        var tabData = $(this).data('tab');
        tabWrapper.find(tabContent).hide();
        tabWrapper.find(tabContent).filter('[data-tab=' + tabData + ']').show();
    });

    $('.tab-mnu > li').click(function () {
        var before = $('.tab-mnu li.active');
        before.removeClass('active');
        $(this).addClass('active');
    });

});

// count input
$(document).ready(function () {
    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 0 : count;
        if (count < 1) {
            $(this).closest(".menu-item__btn-wrap").children("button").removeClass('hide');
            $(this).closest(".menu-item__block-bottom").removeClass('active');
        }
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });
});

// btn item
function viewInput(el) {
    el.forEach(item => {
        item.addEventListener('click', function (e) {
            e.target.classList.add('hide');
            item.closest('.menu-item__block-bottom').classList.add('active')
            let inputCurrent = item.nextElementSibling.querySelector("input")
            inputCurrent.value = +inputCurrent.value + 1;
        })
    })

}

function closeInput(el) {
    el.forEach(item => {
        item.addEventListener('click', function (e) {
            item.closest('.menu-item.order-item').remove('.menu-item.order-item');
        })
    })

}


viewInput(BtnCount);
closeInput(closeOrderItem);


// modal
const backdrop = document.querySelector('#modal-backdrop');
document.addEventListener('click', modalHandler);

function modalHandler(evt) {
    const modalBtnOpen = evt.target.closest('.js-modal');
    if (modalBtnOpen) {
        // open btn click
        const modalSelector = modalBtnOpen.dataset.modal;
        showModal(document.querySelector(modalSelector));
    }
    const modalBtnClose = evt.target.closest('.modal-close');
    if (modalBtnClose) {
        // close btn click
        evt.preventDefault();
        hideModal(modalBtnClose.closest('.modal-window'));
    }
    if (evt.target.matches('#modal-backdrop')) {
        // backdrop click
        hideModal(document.querySelector('.modal-window.show'));
    }
}

function showModal(modalElem) {
    modalElem.classList.add('show');
    backdrop.classList.remove('hidden');
    body.classList.add('scroll-hide');
}

function hideModal(modalElem) {
    modalElem.classList.remove('show');
    backdrop.classList.add('hidden');
    body.classList.remove('scroll-hide');
}


const showSingleProduct = document.querySelectorAll('.show-single__product');


// function openSingleModal
showSingleProduct.forEach(function (item) {
    item.addEventListener('click', function () {
        let inputMain = item.nextElementSibling.querySelector("input")
        inputMain.value
        let numberWrap = document.querySelector('.number-wrap input');
        numberWrap.value = inputMain.value;
        numberWrap.value = !inputMain.value ? +numberWrap.value + 1 : inputMain.value;

        let foo = 0 || 1 && 3
        console.log(foo)
    })
})


// fancybox
$(document).ready(function () {
    // add all to same gallery
    $(".gallery a").attr("data-fancybox", "mygallery");
    // assign captions and title from alt-attributes of images:
    $(".gallery a").each(function () {
        $(this).attr("data-caption", $(this).find("img").attr("alt"));
        $(this).attr("title", $(this).find("img").attr("alt"));
    });
    // start fancybox:
    $(".gallery a").fancybox();
});


// checkbox
function removeClassLabel() {
    $("input:checkbox").closest('label').removeClass('active')
}

function removeClassLabelFirst() {
    $(".order-box__first input:checkbox").closest('label').removeClass('active')
}

function removeClassLabelSecond() {
    $(".order-box__second input:checkbox").closest('label').removeClass('active')
}

$(".order-box__first input:checkbox").on('click', function () {
    var $box = $(this);
    if ($box.is(":checked")) {
        var group = "input:checkbox[name='" + $box.attr("name") + "']";
        removeClassLabelFirst();
        $box.closest('label').addClass('active')
        $(group).prop("checked", false);
        $box.prop("checked", true);
    } else {
        $box.prop("checked", false);
        removeClassLabel();
    }
});
$(".order-box__second input:checkbox").on('click', function () {
    var $box = $(this);
    if ($box.is(":checked")) {
        var group = "input:checkbox[name='" + $box.attr("name") + "']";
        removeClassLabelSecond();
        $box.closest('label').addClass('active')
        $(group).prop("checked", false);
        $box.prop("checked", true);
    } else {
        $box.prop("checked", false);
        removeClassLabel();
    }
});


const orderItem = document.querySelectorAll(".order-items .js-modal");
const orderinput = document.querySelectorAll(".order-items .order-item input");
const minus = document.querySelectorAll('.minus');
const plus = document.querySelectorAll('.plus');
const btnWrap = document.querySelectorAll('.menu-item__btn-wrap');

orderItem.forEach(function (item) {
    item.classList.remove("js-modal")
})

orderinput.forEach(function (el) {
    // if (el.value == 1) {
    //     el.closest("div").classList.add('disabled')
    // }
})

plus.forEach(function (item) {
    item.addEventListener('click', function () {
       item.closest("div").classList.remove('disabled')
    })
})

// minus.forEach(function (item) {
//     item.addEventListener('click', function () {
//         console.log(item.nextElementSibling)
//     })
// })