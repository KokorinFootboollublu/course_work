let goods = [
    ["Сетевой накопитель QNAP D4 Pro (Rev. B)", "74 838.00 руб.", "https://port-it.ru/image/cache/catalog/i/hk/kl/cb40e63bd352c192e8ce73e32ed3f42e-200x200.jpg", "memory"],
    ["Контроллер Supermicro AOC-STGF-I2S", "22 763.00 руб.", "https://port-it.ru/image/cache/catalog/i/io/lf/8df4ea75ddb835b1b7fdb567af87be1c-200x200.jpg", "part"],
    ["Серверная платформа AIC SB401-VG_XP1-S401VGXX", "93 678.00 руб.", "https://port-it.ru/image/cache/catalog/i/ff/kp/287508b93c3ff0108cc1726afad6f653-200x200.jpg", "base"],
    ["Серверный процессор AMD EPYC 7552 100-000000076", "32 231.00 руб.", "https://port-it.ru/image/cache/catalog/i/mk/do/6a1a970e0c93d159cba2905b486e1314-200x200.jpg", "base"],
    ["Коммутатор Huawei S5735-L24P4S-A1", "331 765.00 руб.", "https://port-it.ru/image/cache/catalog/i/mc/hp/976557412188d088c625c70257942c28-200x200.jpg", "equipment"],
    ["Сетевой накопитель QNAP TS-873AeU-4G", "421 839.00 руб.", "https://port-it.ru/image/cache/catalog/i/la/cb/3f4574607d367e46fe538d6f1dd7dce0-200x200.jpg", "memory"],
    ["Консоль KVM ATEN CL5708M-ATA-RG", "156 750.00 руб.", "https://port-it.ru/image/cache/catalog/i/kc/dp/a9a599af8eb3f600022aa1f57e859667-200x200.jpg", "part"],
    ["Концентратор Digi AW08-G300", "256 768.00 руб.", "https://port-it.ru/image/cache/catalog/i/lf/ip/82fea655b1010029072bdd8398c46183-200x200.jpg", "part"],
    ["Коммутатор Huawei S5731-S48T4X", "233 399.00 руб.", "https://port-it.ru/image/cache/catalog/i/hp/ma/4afdceed7579c72667b554850b51fc47-200x200.jpg", "equipment"],
    ["Источник бесперебойного питания CyberPower OL1000ERTXL2U", "142 033.00 руб.", "https://port-it.ru/image/cache/catalog/i/bi/hn/790f260a338add23f9996b5878484dd1-200x200.jpg", "part"],
    ["Сетевой RAID-накопитель QNAP TS-1685-D1521-8G", "669 390.00 руб.", "https://port-it.ru/image/cache/catalog/i/oo/hj/b4d995b15faf28440c32a6bb9ba0522d-200x200.jpg", "memory"],
    ["Коммутатор Catalyst Cisco WS-C2960L-24TS-LL", "152 107.00 руб.", "https://port-it.ru/image/cache/%D0%A1%D0%B5%D1%82%D0%B5%D0%B2%D0%BE%D0%B5%20%D0%BE%D0%B1%D0%BE%D1%80%D1%83%D0%B4%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5/CISCO/%D0%9A%D0%BE%D0%BC%D0%BC%D1%83%D1%82%D0%B0%D1%82%D0%BE%D1%80%D1%8B%20Catalyst%202960%20Series/Port-it__56296-200x200.jpg", "equipment"],
    ["Адаптер HPE 700763-B21", "36 378.00 руб..", "https://port-it.ru/image/cache/catalog/2020/december/servernyekomplektujuschie/111/port-it_hp_700763-b21-350x350.jpg", "part"],
    ["Адаптер Dell 403-BBMU", "97 020.00 руб..", "https://port-it.ru/image/cache/catalog/2020/december/servernyekomplektujuschie/111/port-it_dell_403-bbmv-200x200.jpg", "part"],
    ["1-о волоконный CWDM мультиплексор/демультиплексор Qtech QWM-M2-47-51-L", "61 233.00 руб.", "https://port-it.ru/image/cache/catalog/i/kd/fb/a13daf41827ab3bfb7d3090a7bb68504-350x350.jpg", "equipment"],
    ["16 канальный одноволоконный DWDM мультиплексор/демультиплексор Qtech QWM-7200-SFM-DE16BR-1U", "73 423.00 руб.", "https://port-it.ru/image/cache/catalog/i/hb/nh/3692eaf33fcf7a70b1d5c6c8e619d00b-350x350.png", "equipment"],
    ["Cетевая карта QNAP QXG-2G4T-I225", "36 622.00 руб.", "https://port-it.ru/image/cache/catalog/i/an/dg/503ad678b283eae811547408a4aadfea-350x350.jpg", "memory"],
    ["SATA-модуль расширения QNAP TL-R1200S-RP", "336 649.00 руб.", "https://port-it.ru/image/cache/catalog/i/ck/ed/5006c870ba2cb34f12fe2544817c17dd-350x350.jpg", "memory"],
    ["Шкаф Hyperline TTR-4261-DD-RAL9005", "138 479.00 руб.", "https://port-it.ru/image/cache/catalog/i/pp/nf/0eb5ad5cf0322c2117585f0b5c9c380b-350x350.jpg", "base"],
    ["Стойка Hyperline ORK2A-3268-RAL9005", "30 595.00 руб.", "https://port-it.ru/image/cache/catalog/i/mm/jf/ebe2aae8df33671c3c9d597f9be68a4a-350x350.jpg", "base"],
]


const load_local = function(){
    for(let i = 0; i < localStorage.length; i++){
        if(localStorage.key(i).split(",")[0] == document.querySelector(".user_name p").innerHTML){
            let local_array = []
            document.querySelectorAll(".goods_card").forEach(element_local =>{
                let mini_local_array = []
                mini_local_array.push(element_local.children[0].children[0].children[0].innerHTML);
                mini_local_array.push(";");
                mini_local_array.push(element_local.children[0].children[0].children[1].innerHTML);
                mini_local_array.push(";");
                mini_local_array.push(element_local.children[1].getAttribute('src'));
                mini_local_array.push(";");
                mini_local_array.push(element_local.children[2].innerHTML);
                mini_local_array.push(";;");
                local_array.push(mini_local_array);
            });
            console.log(String(local_array));
            localStorage.setItem(localStorage.key(i), String(local_array));
            localStorage.removeItem(i)
        }
        
    }
}
let count = 0
const count_function = function(){
    if(document.querySelector(".goods_card") != null){
        document.querySelectorAll(".goods_card").forEach(element_3 => {
            count += Number(element_3.children[0].children[0].children[0].innerHTML.replace(/[руб|.| ]/gi,"")) * Number(element_3.children[0].children[0].children[1].innerHTML.replace(/[x]/gi, ''));
        });
        document.querySelector(".summ").children[1].innerHTML = `${count/100}.00 руб.` 
        count = 0
    } else{
        document.querySelector(".summ").children[1].innerHTML = `0.00 руб.`
        count = 0
    }
}

goods.forEach(element =>{
    document.querySelector(".search_cards").innerHTML += `
    <div class="search_card">
                <div class="search_card_top">
                    <p>${element[0]}</p>
                    <img class="add_to_cart" src="media/add_icon.svg" alt="">
                </div>
                <img src="${element[2]}" alt="">
                <p class="margin_top">${element[1]}</p>
            </div>
    `
})

let add_buttons = document.querySelectorAll(".add_to_cart");
add_buttons.forEach(element_1 => {
    element_1.onclick = function(){
        let clip = []
        let fast_memory = []
        clip.push(element_1.parentElement.children[0].innerHTML);
        clip.push(element_1.parentElement.parentElement.children[1].getAttribute('src'));
        clip.push(element_1.parentElement.parentElement.children[2].innerHTML);
        fast_memory.push(clip);
        clip = []
        let match_check = []
        document.querySelectorAll(".goods_card").forEach(element_spec => {
            match_check.push(element_spec.children[2].innerHTML)
        });
        fast_memory.forEach(element_2 => {
            if(match_check.includes(element_2[0]) == true){
                document.querySelectorAll(".goods_card").forEach(element_spec2 =>{
                    if(element_spec2.children[2].innerHTML == element_2[0]){
                        element_spec2.children[0].children[0].children[1].innerHTML = `
                        x${Number(element_spec2.children[0].children[0].children[1].innerHTML.replace(/[x]/gi, '')) + 1}
                        `
                    }
                })
            } else{
                document.querySelector(".goods_cart").innerHTML += `
                    <div class="goods_card">
                        <div class="goods_card_top">
                            <div class="price_amount">
                                <p>${element_2[2]}</p>
                                <p>x1</p>
                            </div>
                            <div class="buttons">
                                <div class="btn_redact"><img src="media/redact_icon.svg" alt=""></div>
                                <div class="btn_delete"><img src="media/delete_icon.svg" alt=""></div>
                            </div>
                        </div>
                        <img class="card_img" src="${element_2[1]}" alt="">
                        <p class="goods_card_decript">${element_2[0]}</p>
                    </div>
                `
            }
            load_local();
            fast_memory = []
        });
        count_function();
    }
});

document.querySelector(".goods_cart").onmouseover = function(){
    if(document.querySelector(".goods_cart").children != null){
        count_function();
        document.querySelectorAll(".btn_delete").forEach(btn_delete => {
            btn_delete.onclick = function(){
                btn_delete.parentElement.parentElement.parentElement.remove();
                load_local();
                count_function();
            }
        });

        document.querySelectorAll(".btn_redact").forEach(btn_redact => {
            btn_redact.onclick = function(){
                btn_redact.parentElement.parentElement.innerHTML +=  `
                    <div class="redact_modal">
                        <img class="btn_back" src="media/Arrow 1.svg" alt="">
                        <div class="redact_count">
                            <p>Введите количество товара:</p>
                            <input type="number">
                        </div>
                        <div class="accept_count">принять</div>
                    </div>
                `
                document.querySelectorAll(".btn_back").forEach(btn_back => {
                    btn_back.onclick = function(){
                        btn_back.parentElement.remove()
                    }
                });
                document.querySelectorAll(".accept_count").forEach(accept_count => {
                    accept_count.onclick = function(){
                        if(accept_count.parentElement.children[1].children[1].value != "" && accept_count.parentElement.children[1].children[1].value != NaN){
                            console.log(accept_count.parentElement.children[1].children[1].value);
                            accept_count.parentElement.parentElement.parentElement.children[0].children[0].children[1].innerHTML = `x${accept_count.parentElement.children[1].children[1].value}`
                        }
                        accept_count.parentElement.remove()
                        load_local()
                    }
                });
            }
        });
    }
}

document.querySelectorAll(".add_to_cart").forEach( element => {
    element.onmouseover = function(){
        element.style.scale = "1.2"
    }
    element.onmouseout = function(){
        element.style.scale = "1"
    }
});