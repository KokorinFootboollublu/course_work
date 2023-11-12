document.querySelector(".client_side").children[2].onclick = function(){
    document.querySelector(".modals").innerHTML = `
    <div class="registration"> 
        <div class="reg_window"> 
            <img src="media/delete_icon.svg" alt="">
            <input class="reg_data" type="text" placeholder="придумайте логин"> 
            <input type="text" placeholder="введите почту"> 
            <input class="reg_data" type="text" placeholder="придумайте пароль"> 
            <input class="reg_data_check" type="text" placeholder="повторите пароль">
            <p class="no_login_reg" hidden>Введите логин!</p>
            <p class="no_password_reg" hidden>Введите пароль!</p>
            <p class="no_match_reg" hidden>Пароли не совпадают!</p>
            <p class="no_match_reg_log" hidden>Логин уже занят!</p>
            <div class="confirm_reg">подтвердить</div> 
        </div> 
    </div>`
}
document.querySelector(".client_side").children[1].onclick = function(){
    document.querySelector(".modals").innerHTML = `
    <div class="registration">
            <div class="reg_window">
                <img src="media/delete_icon.svg" alt="">
                <input class="log_data" type="text" placeholder="введите логин"> 
                <input class="log_data" type="text" placeholder="введите пароль">
                <p class="no_match_log" hidden>Неправильный логин или пароль!</p>
                <div class="confirm_log">подтвердить</div> 
            </div> 
    </div>`
}


let storage = []
document.querySelector("body").onclick = function(){
    if(document.querySelector(".reg_window") !=null){
        document.querySelector(".reg_window img").onclick = function(){
            document.querySelector(".modals").removeChild(document.querySelector(".registration"));
        }
    }
    if(document.querySelector(".confirm_reg") != null){
        document.querySelector(".confirm_reg").onmouseover = function(){
            document.querySelector(".confirm_reg").style.scale = "1.05"
        }
        document.querySelector(".confirm_reg").onmouseout = function(){
            document.querySelector(".confirm_reg").style.scale = "1"
        }

        document.querySelector(".confirm_reg").onclick = function(){
            let login = document.querySelectorAll(".reg_data")[0].value
            let password = document.querySelectorAll(".reg_data")[1].value;
            let password_check = document.querySelector(".reg_data_check").value;
            if(document.querySelectorAll(".reg_data")[0].value == ""){
                document.querySelector(".no_login_reg").removeAttribute("hidden")
            } else{
                document.querySelector(".no_login_reg").setAttribute("hidden", 1)
                let login_check = []
                for (let i = 0; i < localStorage.length; i++) {
                    login_check.push(localStorage.key(i).split(",")[0])
                }
                if(login_check.includes(document.querySelectorAll(".reg_data")[0].value) == true){
                    document.querySelector(".no_match_reg_log").removeAttribute("hidden")
                } else{
                    document.querySelector(".no_match_reg_log").setAttribute("hidden", 1)
                    document.querySelector(".no_login_reg").setAttribute("hidden", 1)
                if(document.querySelectorAll(".reg_data")[1].value == ""){
                    document.querySelector(".no_password_reg").removeAttribute("hidden")
                } else{
                    document.querySelector(".no_password_reg").setAttribute("hidden", 1)
                    if(password == password_check){
                        storage.push(login);
                        storage.push(password);
                        document.querySelector(".user_name p").innerHTML = document.querySelectorAll(".reg_data")[0].value
                        document.querySelector(".modals").removeChild(document.querySelector(".registration"));
                    } else(
                        document.querySelector(".no_match_reg").removeAttribute("hidden")
                        )
                    localStorage.setItem(storage, "");
                    storage = []
                }
                }
            }
        }
    }
    
    else if(document.querySelector(".confirm_log") != null){
        document.querySelector(".confirm_log").onmouseover = function(){
            document.querySelector(".confirm_log").style.scale = "1.05"
        }
        document.querySelector(".confirm_log").onmouseout = function(){
            document.querySelector(".confirm_log").style.scale = "1"
        }

        document.querySelector(".confirm_log").onclick = function(){
            let data_1 = document.querySelectorAll(".log_data")[0].value+","+document.querySelectorAll(".log_data")[1].value;
            if(localStorage.getItem(data_1) != null){
                document.querySelector(".user_name p").innerHTML = document.querySelectorAll(".log_data")[0].value
                let splited_storage = []
                localStorage.getItem(data_1).split(",;;,").forEach(element_split => {
                    splited_storage.push(element_split.split(",;,"));
                });
                document.querySelector(".goods_cart").innerHTML = ""
                splited_storage.forEach(element_splited => {
                    if(element_splited[0] != ";;" && element_splited[0].split(";;,")[1] == undefined){
                        document.querySelector(".goods_cart").innerHTML += `
                        <div class="goods_card">
                            <div class="goods_card_top">
                                <div class="price_amount">
                                    <p>${element_splited[0]}</p>
                                    <p>${element_splited[1]}</p>
                                </div>
                                <div class="buttons">
                                    <div class="btn_redact"><img src="media/redact_icon.svg" alt=""></div>
                                    <div class="btn_delete"><img src="media/delete_icon.svg" alt=""></div>
                                </div>
                            </div>
                            <img class="card_img" src="${element_splited[2]}" alt="">
                            <p class="goods_card_decript">${element_splited[3]}</p>
                        </div>
                    `
                    }
                    else  if(element_splited[0] != ";;" && element_splited[0].split(";;,")[1] != undefined){
                        document.querySelector(".goods_cart").innerHTML += `
                        <div class="goods_card">
                            <div class="goods_card_top">
                                <div class="price_amount">
                                    <p>${element_splited[0].split(";;,")[1]}</p>
                                    <p>${element_splited[1]}</p>
                                </div>
                                <div class="buttons">
                                    <div class="btn_redact"><img src="media/redact_icon.svg" alt=""></div>
                                    <div class="btn_delete"><img src="media/delete_icon.svg" alt=""></div>
                                </div>
                            </div>
                            <img class="card_img" src="${element_splited[2]}" alt="">
                            <p class="goods_card_decript">${element_splited[3]}</p>
                        </div>
                    `
                    }
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
                })
                fast_memory = []
                document.querySelector(".modals").removeChild(document.querySelector(".registration"));
            } else(
                document.querySelector(".no_match_log").removeAttribute("hidden")
            )
        }
    } 
}