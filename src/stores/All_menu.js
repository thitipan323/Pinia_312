import { ref } from 'vue';
import { defineStore } from 'pinia'

export const menuStore = defineStore('menu', () => {

const menu_list=ref([
    {name:"LLOYD AND ARIN'S NINJA TEAM MECHS", img:"https://www.central.co.th/adobe/dynamicmedia/deliver/dm-aid--e1834404-f900-429b-a6cc-b34697963415/lego-lloydandarinsninjateammechsblocktoysninjago-cds96940181-1.jpg?quality=60&preferwebp=true&width=550", price:3390},
    {name: "CAR AND BIKE BATTLE นินจาโก", img:"https://www.central.co.th/adobe/dynamicmedia/deliver/dm-aid--d4ee2ebc-d2bf-4adb-b6a9-daa01433795c/lego-carandbikebattleblocktoysninjago-cds96940136-1.jpg?quality=60&preferwebp=true&width=550", price:800 },
    {name: "NINJAGO® COLE’S DRAGON CRUISER", img:"https://www.central.co.th/adobe/dynamicmedia/deliver/dm-aid--e99c78e8-d882-4ec9-88cc-9ca3f54a393e/lego-ninjago%C2%AEcole%E2%80%99sdragoncruiser71769multi-color-cds90705656-1.jpg?preferwebp=true&quality=60&width=550", price:2010 },
    {name: "NINJAGO® SMALL MODULAR BU.. V29", img:"https://www.central.co.th/adobe/dynamicmedia/deliver/dm-aid--e538d6c6-16b0-46da-98c0-5ebba2d1b3a1/lego-ninjago%C2%AEsmallmodularbuv2971764multi-color-cds89264379-1.jpg?preferwebp=true&quality=60&width=550", price:1745 },
    {name: "ZANE’S ICE DRAGON CREATURE", img:"https://www.central.co.th/adobe/dynamicmedia/deliver/dm-aid--db9be556-a9f6-4bc7-bf0f-7d84e7ea51ad/lego-zane%E2%80%99sicedragoncreature71786-cds93994361-1.jpg?preferwebp=true&quality=60&width=550", price:4390 },
    {name: "NINJAGO LLOYD’S GOLDEN ULTRA DRAGON", img:"https://www.central.co.th/adobe/dynamicmedia/deliver/dm-aid--d84b5994-bc7f-4a6a-bf53-4354967f3f19/lego-ninjagolloyd%E2%80%99sgoldenultradragon71774multi-color-cds91140241-1.jpg?preferwebp=true&quality=60&width=550", price:6250 },
    {name: "JAY’S TITAN MECH", img:"https://www.central.co.th/adobe/dynamicmedia/deliver/dm-aid--6fa7ef36-1ec5-477a-a046-ac3acfcd89c0/lego-jay%E2%80%99stitanmech71785-cds93994354-1.jpg?preferwebp=true&quality=60&width=550", price:3490 },
    {name: "NINJAGO NINJA DOJO TEMPLE", img:"https://www.central.co.th/adobe/dynamicmedia/deliver/dm-aid--72791d25-fad3-4491-8fd0-250ac034f42b/lego-ninjagoninjadojotemple71767multi-color-cds88012971-1.jpg?preferwebp=true&quality=60&width=550", price:4040 },
    {name: "KAI'S MECH RIDER EVO", img:"https://www.central.co.th/adobe/dynamicmedia/deliver/dm-aid--61daa104-ad48-46fb-8b5b-4836b6b54ec2/lego-kaismechriderevo71783-cds93994330-1.jpg?preferwebp=true&quality=60&width=550", price:1990 },
    {name: "LLOYD'S NINJA STREET BIKE", img:"https://www.central.co.th/adobe/dynamicmedia/deliver/dm-aid--1a0f62ed-2e36-4b73-ab5f-6e08b3bcd9ec/lego-lloydsninjastreetbike71788-cds93994385-1.jpg?preferwebp=true&quality=60&width=550", price:450 },
])

return { menu_list }
})