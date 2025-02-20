let animationOnes=document.querySelectorAll('.animation-one');
let animationTwos=document.querySelectorAll('.animation-two');
window.addEventListener('scroll',function(){
    let img = document.querySelector('.img');
    let header = document.querySelector('.header');
    if(window.scrollY >50){
        img.classList.add('resize');
        header.classList.add('scrolled');
    }else{
        img.classList.remove('resize');
        header.classList.remove('scrolled');
    }

    animationOnes.forEach((animationOne)=>{
        let position=animationOne.getBoundingClientRect();
        if(position.top>=0 && position.top<=window.innerHeight-100){
            if(!animationOne.classList.contains('active')){
                animationOne.classList.add('active');
            }
        }
    });

    animationTwos.forEach((animationTwo)=>{
        let position=animationTwo.getBoundingClientRect();
        if(position.top>=0 && position.top<=window.innerHeight-100){
            if(!animationTwo.classList.contains('active')){
                animationTwo.classList.add('active');
            }
        }
    });
});

const scrolltotopButton=document.getElementById('scrolltoTop');
window.addEventListener('scroll',() => {
    if(window.scrollY>200){
        scrolltotopButton.classList.remove('hidden');
    }else{
        scrolltotopButton.classList.add('hidden');
    }
});

scrolltotopButton.addEventListener('click',()=>{
    window.scrollTo({
        top:0,
        behavior:'smooth'
    });
});

const menuButton=document.getElementById('menu');
const menuToggle=document.getElementById('menu-toggle');
const icon=menuToggle.querySelector('i');

menuToggle.addEventListener('click',()=>{
    menuButton.classList.toggle('active');
    if (menuButton.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");
    } else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
    }
});

const transitions={
    "en": {
      "home": "Home",
      "services": "Services",
      "about": "About Us",
      "contact": "Contact",
      "homecontent": "Welcome to TopRate VietNam",
      "homecontent2": "We are a technology company based in Vietnam, specializing in Consulting & Software Development. Founded in 2019 by a group of IT professionals with great experience and passion for technology. Our company provides advanced technical solutions and has been helping many customers in Vietnam and around the world. We are proud of the quality of our work and constantly looking for new ways to improve our know-how and capabilities.",
      "explore": "Explore",
      "services2":"The services we provide",
      "webDevTitle": "Web Development",
        "webDevIntro": "We apply new technologies to develop the Web on a variety of platforms. Wishing to bring the best user experience.",
        "webDevServices": "The web services we provide",
        "webDevList":[
            "Website designing.",
            "Developing web applications on multiple platforms.",
            "Improving web performance.",
            "Maintaining the web system.",
            "Developing e-commerce websites."
        ],
        "content":"Programming language",
        "content2":"Database",
        "content3":"Web platform",
        "mobileDevTitle": "Mobile application development",
        "mobileDevIntro": "TopRate has extensive experience in developing public applications on the store and enterprise applications. We develop applications on the platforms: iPhone, iPad, Android Smartphone, and Android Tablet.",
        "servicesTitle": "Services we provide",
        "servicesList": [
            "Research – Analyze requirements",
            "User interface design",
            "Make detailed requirements, business flow",
            "Create detailed designs",
            "Build back-end, design database",
            "Build apps",
            "App release"
        ],
        "appsTitle": "Some of developed applications",
        "appsList": [
            "Applications for telecommunications, ebanking",
            "Multi-media applications",
            "E-learning applications",
            "Enterprise applications : CRM, human resources, accounting"
        ],
        "langTitle": "Language - Platform",
        "laborServiceTitle": "Labor Service",
        "laborServiceContent": `ODC solution for software development
                                Minimize the cost of setting up business infrastructure with
                                strong and modern infrastructure team and equipment. Toprate provides abundant IT human resources with
                                high level. ODCs always have technical support, and
                                absolute security policies throughout the project implementation period.`,
        "laborModelsTitle": "Models of Labot that TopRate offers",
        "laborModelsList": [
            "Mode 1: Customers are not present at the Toprate office.",
            "Model 2: Customers are present at the Toprate office."
        ],
        "description1": "I have always been somewhat skeptical of offshore help for my business and had a major blockage with my team needing to be in my workplace for me to manage. That skepticism has been thrown out of the window since starting work with the TopRate dedicated team. The...",
        "tooltiptext1": "I have always been somewhat skeptical of offshore help for my business and had a major blockage with my team needing to be in my workplace for me to manage. That skepticism has been thrown out of the window since starting work with the TopRate dedicated team. The process has been seamless and the selected engineers were all capable of delivering technical solutions that help us prevail.",
        "name1": "Nafis Azad",
        "job1": "Chief Product Officer",
            
        "description2": "I can highly recommend TopRate as they took the emotion and guesswork out of recruiting and placed the right candidate for the right job! At G-Soft, our business is all about timely delivery and TopRate most definitely exceeded our expectations by staffing our growth while maintaining a high...",
        "tooltiptext2": "I can highly recommend TopRate as they took the emotion and guesswork out of recruiting and placed the right candidate for the right job! At G-Soft, our business is all about timely delivery and TopRate most definitely exceeded our expectations by staffing our growth while maintaining a high standard of technicality and work ethics. Outsourcing is a very fast-growing sector, so our advice is to make sure you work with a professional organization who totally understands your business, like Viet and the executive team at TopRate.",
        "name2": "Michael Noas",
        "job2": "Senior Manager",
            
        "description3": "I have been with TopRate for almost two years now. Forget what you think you know about Outsourcing, as these guys have raised the bar. The staff I have worked with have become a major part of my business. As a young startup focusing on clean and renewable...",
        "tooltiptext3": "I have been with TopRate for almost two years now. Forget what you think you know about Outsourcing, as these guys have raised the bar. The staff I have worked with have become a major part of my business. As a young startup focusing on clean and renewable energy, we at AOECorp move rather quickly and often leave a pile of technical debts trailing behind. TopRate engineers not only helped me sort the moving pieces out to keep up with the deadlines but also refactor the baselines to make the whole system more scalable and extensible.",
        "name3": "Santa Cao",
        "job3": "Solution Manager",
        "customersTitle":"Customers",
        "customersSubTitle":"Customers",
        "title": "Contact",
        "address": "20th floor, IDMC My Dinh building, 15 Pham Hung, My Dinh 2 ward, Nam Tu Liem district, Hanoi city",
        "time": "Monday - Friday / 8:30 - 17:30",
        placeholders: {
            company: "Company",
            name: "Name",
            email: "Email",
            message: "Message",
        },
        "button": "Send",
    },


    "ja": {
      "home": "ホーム",
      "services": "サービス",
      "about": "情報",
      "contact": "連絡",
      "homecontent": "TopRate VietNamへようこそ",
      "homecontent2": "TOPRATEの紹介 私たちはベトナムに拠点を置き、ソフトウェア開発とコンサルティングを専門とするテクノロジー企業です。 経験豊富なITプロフェッショナルとテクノロジーへの大きな情熱のチームによって2019年に設立されました。 当社は、高度な技術ソリューションを提供し、ベトナムおよび世界中の多くのお客様が問題を解決するのを支援してきました。 私たちは仕事の質に誇りを持っており、ノウハウと能力を向上させるための新しい方法を常に模索しています。",
      "explore": "探る",
      "services2":"TOPRATEの開発サービス",
      "webDevTitle": "ウェブサイト開発",
        "webDevIntro": "TopRateは、各顧客に適したさまざまなプラットフォームでWebアプリケーションをコンサルティング、構築、開発、および展開してきました。 こうすることで、パートナーが顧客に迅速に連絡し、品質と信頼性の高い製品とサービスを顧客に宣伝できるようになります。",
        "webDevServices": "どこから来たのですか？",
        "webDevList": [ 
            "コンサルティングとWebアプリケーションの設計のソリューション",
            "クロスプラットフォームでのWebアプリケーションの開発",
            "Webアプリケーションの保守、アップグレード、および最適化"
        ],
        "content":"開発言語",
        "content2":"データベー",
        "content3":"Webプラットフォーム",
        "mobileDevTitle": "モバイルアプリケーション開発",
        "mobileDevIntro": "さまざまなバックエンドを備えたモバイルプラットフォームでのネイティブアプリケーションの開発を専門としています。さらに、質の高いユーザーエクスペリエンスとインターフェイスを備えたクロスプラットフォームのアプリケーション開発サービスも提供しています。",
        "servicesTitle": "提供するサービス      ",
        "servicesList": [
            "調査–要件の分析",
            "ユーザーデザイン設計",
            "詳細な要件、ビジネスフローの作成",
            "詳細なデザイン作成",
            "バックエンドの構築、データベースの設計",
            "アプリの作成",
            "アプリのリリース"
        ],
        "appsTitle": "いくつかの開発したアプリ",
        "appsList": [
            "電気通信、銀行業務のアプリケーション",
            "マルチメディアアプリケーション",
            "オンライン学習に関するアプリケーション",
            "企業の内部アプリケーション：計時、人材、経理"
        ],
        "langTitle": "言語–プラットフォーム",
        "laborServiceTitle": "ラボサービス",
        "laborServiceContent": `ソフトウェアの開発ためのODCサービスは、最新の独立したチームと現代の施設を使用してビジネスインフラストラクチャをセットアップするコストを削減します。TopRateは、豊富で高度な資格を持つIT人材を提供します。 ODCには、プロジェクトの実施期間を通じて常に継続的な技術サポートポリシーがあります。`,
        "laborModelsTitle": "TopRateは2つの形式のラボを提供します",
        "laborModelsList": [
            "フォーム1：顧客はTopRateのオフィスにいません",
            "フォーム2：顧客はTopRateのオフィスにいます"
        ],
            
        "description1": "私はいつも自分のビジネスに対する外国の援助について疑問を持っていました。そして、私が管理するため...",
        "tooltiptext1": "私はいつも自分のビジネスに対する外国の援助について疑問を持っていました。そして、私が管理するために私のチームが会社に出社する必要があるという大きな問題を抱えていました。 TopRateの専任チームとの協力を開始して以来、その懐疑論は取り除かれました。 プロセスはシームレスであり、選択されたエンジニアはすべて、私たちの成長を支援する技術ソリューションを提供することができます。",
        "name1": "Nafis Azad",
        "job1": "チーフプロダクトオフィサー",
            
            
        "description2": "TopRateは採用ステップから感情や当て推量を取り除き、適切な仕事に適切な候補者を配置するため...",
        "tooltiptext2": "TopRateは採用ステップから感情や当て推量を取り除き、適切な仕事に適切な候補者を配置するため、TopRateを使用することを強くお勧めします。 G-Softでは、ビジネスを時間どおりに遂行する必要があります。TopRateは、高い技術的および倫理的基準の作業を維持しながらスタッフを強化することで、確実に期待を上回ります。 アウトソーシングは非常に急速に成長している分野であるため、私たちのアドバイスは、TopRateのベトさんや経営陣などのビジネスを完全に理解している専門組織と協力することです。",
        "name2": "マイケルノアス",
        "job2": "シニアマネージャー",
            
        "description3": "私はTopRateで2年近く働いています。アウトソーシングについて知っていたと思ったことを忘れて...	",
        "tooltiptext3": "私はTopRateで2年近く働いています。アウトソーシングについて知っていたと思ったことを忘れてください。これらの人がそれを次のレベルに持って行ったからです。一緒に仕事をしているチームは、私のビジネスの重要な部分になっています。 クリーンで再生可能なエネルギーに焦点を当てた若いスタートアップとして、AOECorpは非常に急速に成長し、大量の技術的負債を残しています。 TopRateのエンジニアは、期限に間に合うようにコンポーネントの作業を合理化するだけでなく、システム全体をリファクタリングして、よりスケーラビリティかつ機能的なものにしました。",
        "name3": "サンタカオ",
        "job3": "最高経営責任者",
        "customersTitle":"お客様",
        "customersSubTitle":"私たちのパートナーと顧客",
        "title": "連絡情報",
        "address": "住所：Ha noi、Nam Tu Liem、Phuong My Dinh 2,Pham Hung 15番、 IDMC My Dinh ビル、20階　",
        "time": "月曜日～金曜日 / 8:30 - 17:30",
        placeholders: {
            company: "会社名",
            name: "氏名",
            email: "メールアドレス",
            message: "メッセージ",
        },
        "button": "送信",
    },


    "vi": {
      "home": "Trang chủ",
      "services": "Dịch vụ",
      "about": "Thông tin",
      "contact": "Liên hệ",
      "homecontent": "Giới thiệu về TopRate",
      "homecontent2": "Chúng tôi là một công ty công nghệ có trụ sở tại Việt Nam, chuyên về Tư vấn & Phát triển Phần mềm. Được thành lập vào năm 2019 bởi một nhómcủa các chuyên gia CNTT có kinh nghiệm và niềm đam mê lớn đối với công nghệ.Công ty chúng tôi cung cấp các giải pháp kỹ thuật tiên tiến đã và đang giúp đỡ rất nhiều khách hàng tại Việt Nam và trên thế giới. Chúng tôi tự hào vềchất lượng công việc của chúng tôi và không ngừng tìm kiếm những cách thức mới để cải thiện bí quyết và năng lực của chúng tôi.",
      "explore": "Xem thêm",
      "services2":"Dịch vụ phát triển của TopRate",
      "webDevTitle": "Phát triển Web",
        "webDevIntro": "Với phương châm lấy khách hàng là trung tâm, Toprate đã tư vấn, xây dựng, phát triển và triển khai các ứng dụng web trên các nền tảng đa dạng khác nhau, phù hợp với từng khách hàng. Qua đó giúp đối tác tiếp cận nhanh nhất với khách hàng của mình, quảng bá được các sản phẩm, dịch vụ chất lượng và tin cậy của mình tới khách hàng.",
        "webDevServices": "Các dịch vụ mà chúng tôi cung cấp:",
        "webDevList":[
            "Giải pháp tư vấn và thiết kế các ứng dụng web",
            "Phát triển các ứng dụng web đa nền tảng",
            "Bảo trì, nâng cấp và tối ưu các ứng dụng web"
        ],
        "content":"Ngôn ngữ lập trình",
        "content2":"Cơ sở dữ liệu",
        "content3":"Nền tảng web",
        "mobileDevTitle": "Phát triển ứng dụng di động",
        "mobileDevIntro": "Chúng tôi chuyên phát triển các ứng dụng native trên các nền tảng di động khác nhau, với hệ thống backends đa dạng, ngoài ra chúng tôi còn cung cấp dịch vụ phát triển ứng dụng cross-platform với trải nghiệm người dùng và giao diện chất lượng cao.",
        "servicesTitle": "Các dịch vụ cung cấp:",
        "servicesList": [
            "Nghiên cứu – Phân tích yêu cầu",
            "Thiết kế giao diện người dùng",
            "Làm chi tiết yêu cầu, luồng nghiệp vụ",
            "Tạo thiết kế chi tiết",
            "Xây dựng BackEnd, thiết kế cơ sở dữ liệu",
            "Xây dựng ứng dụng",
            "Phát hành ứng dụng"
        ],
        "appsTitle": "Một số app đã phát triển",
        "appsList": [
            "Các ứng dụng về viễn thông, ngân hàng",
            "Các ứng dụng multi-media",
            "Các ứng dụng về học trực tuyến",
            "Các ứng dụng nội bộ của doanh nghiệm : chấm công, nhân sự, kế toán"
        ],
        "langTitle": "Ngôn ngữ – Nền tảng",
        "laborServiceTitle": "Dịch vụ Labor",
        "laborServiceContent": `Giải pháp ODC cho việc phát triển phần mềm
                                Giảm thiểu chi phí thiết lập cơ sở hạ tầng kinh doanh với
                                đội ngũ và trang thiết bị cơ sở hạ tầng mạnh mẽ và hiện đại. Toprate cung cấp nguồn nhân lực CNTT dồi dào với
                                trình độ cao. Các ODC luôn có sự hỗ trợ về kỹ thuật, đồng thời có
                                các chính sách bảo mật tuyệt đối trong suốt thời gian thực hiện dự án`,
        "laborModelsTitle": "TopRate cung cấp 2 hình thức Labor",
        "laborModelsList": [
            "Hình thức 1 : Khách hàng không có mặt ở văn phòng TopRate",
            "Hình thức 2 : Khách hàng có mặt ở văn phòng TopRate"
        ],
        "description1": "Tôi đã luôn nghi ngờ về sự giúp đỡ từ nước ngoài cho doanh nghiệp của mình và gặp trở ngại lớn với việc nhóm của tôi cần phải có mặt tại nơi làm việc để tôi quản lý. Sự hoài nghi đó đã được loại bỏ khỏi...",
        "tooltiptext1": "Tôi đã luôn nghi ngờ về sự giúp đỡ từ nước ngoài cho doanh nghiệp của mình và gặp trở ngại lớn với việc nhóm của tôi cần phải có mặt tại nơi làm việc để tôi quản lý. Sự hoài nghi đó đã được loại bỏ khỏi cửa sổ kể từ khi bắt đầu làm việc với team chuyên trách của TopRate. Quá trình diễn ra liền mạch và các kỹ sư được chọn đều có khả năng cung cấp các giải pháp kỹ thuật giúp chúng tôi phát triển.",
        "name1": "Nafis Azad",
        "job1": "Chief Product Officer",
               
        "description2": "Tôi rất khuyến nghị làm việc với TopRate vì họ đã loại bỏ cảm xúc và phỏng đoán trong khâu tuyển dụng và đặt đúng ứng viên cho từng công việc phù hợp! Tại , hoạt động kinh doanh của chúng tôi cần triển khai đúng hẹn và...",
        "tooltiptext2": "Tôi rất khuyến nghị làm việc với TopRate vì họ đã loại bỏ cảm xúc và phỏng đoán trong khâu tuyển dụng và đặt đúng ứng viên cho từng công việc phù hợp! Tại , hoạt động kinh doanh của chúng tôi cần triển khai đúng hẹn và TopRate chắc chắn vượt quá mong đợi của chúng tôi bằng cách tăng cường đội ngũ nhân sự trong khi duy trì tiêu chuẩn cao về kỹ thuật và đạo đức làm việc. Gia công phần mềm là một lĩnh vực đang phát triển rất nhanh, vì vậy lời khuyên của chúng tôi là đảm bảo bạn làm việc với một tổ chức chuyên nghiệp, những người hoàn toàn hiểu doanh nghiệp của bạn, như Việt và nhóm điều hành tại TopRate",
        "name2": "Michael Noas",
        "job2": "Senior Manager",
            
        "description3": "Tôi đã làm việc với TopRate gần hai năm nay. Hãy quên những gì bạn nghĩ rằng bạn biết về gia công phần mềm, vì những người này đã nâng lên một tầm cao mới. Đội ngũ mà tôi làm việc cùng đã trở thành một phần quan...",
        "tooltiptext3": "Tôi đã làm việc với TopRate gần hai năm nay. Hãy quên những gì bạn nghĩ rằng bạn biết về gia công phần mềm, vì những người này đã nâng lên một tầm cao mới. Đội ngũ mà tôi làm việc cùng đã trở thành một phần quan trọng trong công việc kinh doanh của tôi. Là một công ty khởi nghiệp trẻ tập trung vào năng lượng sạch và tái tạo, chúng tôi tại AOECorp phát triển khá nhanh và thường để lại một lượng lớn nợ kỹ thuật phía sau. Các kỹ sư của TopRate không chỉ giúp tôi sắp xếp các công việc thành phần để theo kịp hạn chót mà còn tái cấu trúc lại các giúp cho toàn bộ hệ thống có thể mở rộng quy mô hơn và nhiều chức năng hơn",
        "name3": "Santa Cao",
        "job3": "Solution Manager",
        "customersTitle":"Khách hàng",
        "customersSubTitle":"Các đối tác và khách hàng của chúng tôi",
        "title": "Liên hệ",
        "address": "Tầng 20 tòa nhà IDMC Mỹ Đình, số 15 Phạm Hùng, Phường Mỹ Đình 2, Quận Nam Từ Liêm, Thành phố Hà Nội",
        "time": "Thứ Hai - Thứ Sáu / 8:30 - 17:30",
        placeholders: {
            company: "Công ty",
            name: "Tên",
            email: "Email",
            message: "Tin nhắn",
        },
        "button": "Gửi",
    }
}

function translate(lang){
    const elements=document.querySelectorAll('[id]');

    elements.forEach((element)=>{
        const id = element.id;
        if (transitions[lang][id]) {
            if (Array.isArray(transitions[lang][id])) {
                element.innerHTML = '';
                transitions[lang][id].forEach(item => {
                    const li = document.createElement('li');
                    li.textContent = item;
                    element.appendChild(li);
                });
            } else {
                element.textContent = transitions[lang][id];
            }
        }
    });
}

document.getElementById('english').addEventListener('click',()=>{
    translate('en');
});
document.getElementById('japan').addEventListener('click',()=>{
    translate('ja');
});
document.getElementById('vietnamese').addEventListener('click',()=>{
    translate('vi');
});
document.getElementById('footer-english').addEventListener('click',()=>{
    translate('en');
});
document.getElementById('footer-japan').addEventListener('click',()=>{
    translate('ja');
});
document.getElementById('footer-vietnamese').addEventListener('click',()=>{
    translate('vi');
});
