import i18next from "i18next";
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        debug: true,
        fallbackLng: 'gb',
        resources: {
            gb: {
                translation: {
                    sign_in: "Sign In",
                    middle_post_title: "Join this innovation",
                    middle_post_content: "r-estate aims to eliminate many difficulties brought by traditional methods." +
                                         "The biggest contribution to the real estate sector is that it eliminates the problem" +
                                         "of trust, thanks to its infrastructure." +
                                         "Also it keeps the user experience at the highest level by supporting" +
                                         "this infrastructure with a simple and understandable interface.",
                    main_post_text1: "Buy or sale property quickly",
                    main_post_text2: "and securily with r-estate",
                    main_post_text3: "start to actualize your",
                    main_post_text4: "real estate transactions in a shorter",
                    main_post_text5: "time and more securely",
                    main_post_link: "Review Now",
                    footer_title:"Contuct Us",
                    small_post1_title:"No need for trust",
                    small_post1_desc:"Don\'t need to trust anyone during the buying and selling process, r-estate does not need middlemen.",
                    small_post2_title:"Blockchain assurance",
                    small_post2_desc:"All transactions take place using the ethereum blockchain infrastructure. A record of each transaction is kept on this chain.",
                    small_post3_title:"Get rid of long processes",
                    small_post3_desc:"No need for long and complex document processes. You can buy or sell property quickly with r-estate, which brings all transactions under one roof.",
                    small_posts_title:"Explore all things property",
                    sign_in_google:"Sign in with Google",
                    sign_in_message:"Logging into account",
                    sign_in_control_message:"Checking auth..",
                    fetch_data_message:"Fetching Data...",
                    main_page_adv_line1:"Find Your Ideal",
                    main_page_adv_line2:"Home & Investment",
                    location_field:"Location",
                    type_field:"Type",
                    search_button:"Search",
                    reset_query_button:"Reset Query",
                    navbar_home:"Home",
                    navbar_profile:"Profile",
                    navbar_sale_properties:"Sale Properties",
                    navbar_sell_property:"Sell Property",
                    navbar_logout:"Logout",
                    navbar_properties_page:"Properties",
                    connect_wallet_button:"Connect Wallet",
                    disconnect_wallet_button:"Disconnect",
                    loading_message:"Loading...",
                    price_field:"Price",
                    buy_property_button:"Buy Property",
                    loading_process_button:"Loading Process",
                    connect_wallet_message:"You should connect wallet",
                    property_info1:"Overview",
                    property_info2:"Property Features",
                    property_info3:"About The Property",
                    property_type_field:"Property Type",
                    bedroom_field:"Bedroom",
                    bathroom_field:"Bathroom",
                    living_area_field:"Living area(sqm)",
                    pool_field:"Pool",
                    profile_name_field:"Name & Surname",
                    profile_walletAddress_field:"Wallet Address",
                    profile_walletAddress_message:"There is no any wallet address",
                    sale_properties_connect_wallet_message:"First connect your wallet from profile page",
                    sale_properties_connect_wallet_button:"Go Profile Page",
                    sale_properties_page_title:"Listed Properties",
                    sale_properties_number_field:"Number",
                    sale_properties_is_sold_field:"Is It Sold",
                    sell_property_page_title:"For the sale of property, you should first check the t.deed",
                    sell_property_property_number_field:"Property Number",
                    sell_property_property_code_field:"Property Key Code",
                    sell_property_check_button:"Check Deed",
                    sell_property_detail_page_title:"Enter property information",
                    sell_property_detail_image_field:"Click for adding image file",
                    sell_property_detail_property_title_field:"Property title",
                    sell_property_detail_preview_field:"Preview information",
                    sell_property_detail_inform_field:"Detailed information about property",
                    sell_property_detail_page_title2:"Property features",
                    sell_property_detail_bathroom_field:"Number of bathroom",
                    sell_property_detail_bedroom_field:"Number of bedroom",
                    sell_property_detail_button:"Complete",
                    sell_property_detail_price_message:"Price cannot be lower than fair value! Fair value: ",
                    sell_property_detail_image_message:"You should select image file",
                    sell_property_detail_image_length_message:"You should select at least 2 and at most 5 image file",
                    toast_balance_message:"Insufficient amount",
                    toast_bought_message:"Property bought succesfully",
                    toast_listed_message:"Property succesfully listed",
                }
            },
            tr: {
                translation: {
                    sign_in: "Giri?? Yap",
                    middle_post_title: "Bu yenili??e kat??l??n",
                    middle_post_content: "r-estate, geleneksel y??ntemlerin getirdi??i bir??ok zorlu??u ortadan " +
                                         "kald??rmay?? hedeflemektedir. Gayrimenkul sekt??r??ne en b??y??k katk??s??, " +
                                         "altyap??s?? sayesinde g??ven sorununu ortadan kald??rmas??d??r. Ayr??ca bu " +
                                         "altyap??y?? basit ve anla????l??r bir aray??z ile destekleyerek kullan??c?? " +
                                         "deneyimini en ??st seviyede tutar.",
                    main_post_text1: "R-estate ile h??zl?? ve g??venli ??ekilde ",
                    main_post_text2: "m??lk alarak veya satarak",
                    main_post_text3: "gayrimenkul i??lemlerinizi daha ",
                    main_post_text4: "k??sa s??rede ve daha g??venli bir ??ekilde",
                    main_post_text5: "ger??ekle??tirmeye ba??lay??n",
                    main_post_link: "??imdi ??ncele",
                    footer_title:"Bizimle ??leti??ime Ge??in",
                    small_post1_title:"G??vene gerek yok",
                    small_post1_desc:"Al??m sat??m s??recinde kimseye g??venmeye gerek yok, r-estate ile arac??lara ihtiya?? yok.",
                    small_post2_title:"Blokzincir g??vencesi",
                    small_post2_desc:"T??m i??lemler ethereum blok zinciri altyap??s?? kullan??larak ger??ekle??tirilir. Bu zincirde her i??lemin bir kayd?? tutulur.",
                    small_post3_title:"Uzun i??lemlerden kurtulun",
                    small_post3_desc:"Uzun ve karma????k belge s??re??lerine gerek yok. T??m i??lemleri tek ??at?? alt??nda toplayan r-estate ile h??zl?? bir ??ekilde m??lk al??p satabilirsiniz.",
                    small_posts_title:"T??m ??zellikleri ke??fedin",
                    sign_in_google: "Google ile giri?? yap",
                    sign_in_message:"Hesaba giri?? yap??l??yor",
                    sign_in_control_message:"Do??rulama yap??l??yor..",
                    fetch_data_message: "Veri Y??kleniyor...",
                    main_page_adv_line1:"??dealinizi bulun",
                    main_page_adv_line2:"Ev & Yat??r??m",
                    location_field:"Lokasyon",
                    type_field:"M??lk Tipi",
                    search_button:"Ara",
                    reset_query_button: "S??f??rla",
                    navbar_home:"Ana Sayfa",
                    navbar_profile:"Profil",
                    navbar_sale_properties:"Listelenen M??lklerim",
                    navbar_sell_property:"M??lk Sat",
                    navbar_logout:"????k????",
                    navbar_properties_page:"M??lkler",
                    connect_wallet_button:"C??zdan?? Ba??la",
                    loading_message:"Y??kleniyor...",
                    price_field:"Fiyat",
                    buy_property_button:"Sat??n Al",
                    loading_process_button:"????lem Y??kleniyor",
                    connect_wallet_message:"C??zdan??n??z?? ba??lamal??s??n??z",
                    disconnect_wallet_button:"Ba??lant??y?? kes",
                    property_info1:"??nizlem",
                    property_info2:"M??lk ??zellikleri",
                    property_info3:"M??lk Hakk??nda",
                    property_type_field:"M??lk Tipi",
                    bedroom_field:"Yatak Odas??",
                    bathroom_field:"Banyo",
                    living_area_field:"Ya??am alan??(m2)",
                    pool_field:"Havuz",
                    profile_name_field:"??sim & Soyisim",
                    profile_walletAddress_field:"C??zdan Adresi",
                    profile_walletAddress_message:"C??zdan adresi yok",
                    sale_properties_connect_wallet_message:"??ncelikle profil sayfas??ndan c??zdan??n??z?? ba??lamal??s??n??z",
                    sale_properties_connect_wallet_button:"Profil Sayfas??na Git",
                    sale_properties_page_title:"Listelenmi?? M??lkler",
                    sale_properties_number_field:"Numara",
                    sale_properties_is_sold_field:"Sat??ld?? m??",
                    sell_property_page_title: "M??lk sat?????? i??in ??ncelikle tapu kontrol?? yapmal??s??n??z",
                    sell_property_property_number_field: "Ta????nmaz M??lk Numaras??",
                    sell_property_property_code_field: "Ta????nmaz M??lk Anahtar Kodu",
                    sell_property_check_button:"Kontrol Et",
                    sell_property_detail_page_title:"M??lk bilgilerini giriniz",
                    sell_property_detail_image_field:"G??r??nt?? dosyas?? eklemek i??in t??klay??n",
                    sell_property_detail_property_title_field:"M??lk ba??l??????",
                    sell_property_detail_preview_field:"??nizlem bilgisi",
                    sell_property_detail_inform_field:"M??lk hakk??nda detayl?? bilgi",
                    sell_property_detail_page_title2:"M??lk ??zellikleri",
                    sell_property_detail_bathroom_field:"Banyo say??s??",
                    sell_property_detail_bedroom_field:"Yatak odas?? say??s??",
                    sell_property_detail_button:"Tamamla",
                    sell_property_detail_price_message:"Fiyat rayi?? bedelinin alt??nda olamaz!\nRayi?? bedeli: ",
                    sell_property_detail_image_message:"Resim dosyas?? se??iniz",
                    sell_property_detail_image_length_message:"En az 1 en fazla 5 resim dosyas?? eklemelisiniz",
                    toast_balance_message:"Yetersiz miktar",
                    toast_bought_message:"M??lk ba??ar??yla sat??n al??nd??",
                    toast_listed_message:"M??lk ba??ar??yla listelendi",
                }
            }
        }
    })