import React from 'react';
import logo from "../../../public/logo.png"; // Adjust path as needed
import Footer from '../common/Footer'; // Ensure the path is correct if necessary
import Acharya from '../common/NGOGallery';
import './Styles/Aboutus.css';
const AboutUs = () => {
  return (
    <div className="about-container">
      <img src={logo} alt="ABT Logo" className="logo" />
      <div className="title">About Us</div>

      {/* English Section */}
      <p className="content">
        <strong>Acharya Kailashchandra Dev Brahaspati</strong> was a legendary figure in Indian classical 
        music, known as a venerated composer, scholar, and custodian of cultural traditions. Born on 
        January 20, 1918, in the princely state of Rampur, Uttar Pradesh, he was deeply rooted in the 
        rich cultural and musical heritage of the Rampur (gharana) Sadarang Tradition.
      </p>
      <p className="content">
        Acharya Brahaspati’s early education was shaped by his father, Pandit Govind Ram, a Sanskrit 
        scholar, which instilled in him a strong foundation in Sanskrit literature. He further honed his 
        knowledge of alankara shastra, grammar, and philosophy under the tutelage of eminent scholars 
        like Pandit Parameshwaranand Shastri and Pandit Ramchandra Shastri. He also studied Urdu and 
        Persian under the able guidance of scholars of the Rampur estate.
      </p>
      <p className="content">
        His passion for music began in childhood and flourished under the guidance of Mirza Nawab 
        Hussain and other luminaries of the Rampur court. With his scholarly approach, Acharya 
        Brahaspati successfully bridged ancient musical theories with modern practices. He created 
        unique instruments like the Brahaspati Veena and Shrutidarpan, using them to demonstrate the 
        22 shrutis and ancient Indian Murchhna System.
      </p>
      <p className="content">
        Acharya Brahaspati’s career as a teacher was equally remarkable. He served as a professor of 
        Sanskrit and Dharmashastra at various institutions and later became the chief Advisor in 
        Sanskrit, Brajbhasha, and music at All India Radio, Delhi. His pioneering contribution to 
        starting Sanskrit news broadcasts remains a testament to his dedication to Indian culture.
      </p>
      <p className="content">
        A polyglot and a prolific writer, Acharya Brahaspati authored several monumental works such as 
        “Bharat Ka Sangeet Siddhant,” “Dhruvapad Aur Uska Vikas,” “Sangeet Chintamani,” “Natyashastra 
        ka 28-Vaan Adhyaya,” “Musalmaan Aur Bhartiya Sangeet,” “Khusro Tansen Aur Anya Kalakar,” 
        “Megh Ka Kavi” (a compilation of radio plays), “Brij Ballari Bilas” (a collection of poetry in 
        Brij Bhasha), and “Raag Rahasya” (Part 1 - Part 5). He also studied and interpreted ancient texts 
        like Sharngadeva’s Sangeet Ratnakar and Bharata’s Natya Shastra, making classical music accessible 
        to modern audiences.
      </p>
      <p className="content">
        Acharya Brahaspati passed away on July 31, 1979, but his legacy continues through his disciples, 
        including Ustad Ghulam Mustafa Khan, Vidushi Sulochana Brahaspati, and many others. His profound 
        contributions to both the theoretical and practical aspects of Indian music make him an eternal 
        source of inspiration in the field of arts and culture.
      </p>

      {/* Hindi Section */}
      <div className="title hindi-title">हमारे बारे में</div>
      <p className="content">
        <strong>आचार्य कैलाशचंद्र देव ब्रह्मस्पति</strong> भारतीय शास्त्रीय संगीत के क्षेत्र में एक 
        प्रतिष्ठित व्यक्तित्व थे, जिन्हें एक सम्मानित संगीतकार, विद्वान और सांस्कृतिक परंपराओं 
        के संरक्षक के रूप में जाना जाता है। उनका जन्म 20 जनवरी, 1918 को उत्तर प्रदेश के रियासत 
        रामपुर में हुआ था। वे रामपुर (घराना) सदरंग परंपरा की समृद्ध सांस्कृतिक और संगीत विरासत 
        में गहराई से रचे-बसे थे।
      </p>
      <p className="content">
        आचार्य ब्रह्मस्पति की प्रारंभिक शिक्षा उनके पिता, संस्कृत विद्वान पंडित गोविंद राम, 
        के संरक्षण में हुई, जिससे उन्हें संस्कृत साहित्य की गहरी समझ प्राप्त हुई। उन्होंने 
        पंडित परमेश्वरानंद शास्त्री और पंडित रामचंद्र शास्त्री जैसे प्रमुख विद्वानों से अलंकार 
        शास्त्र, व्याकरण और दर्शन का अध्ययन किया। उन्होंने रामपुर रियासत के विद्वानों के मार्गदर्शन 
        में उर्दू और फ़ारसी का भी अध्ययन किया।
      </p>
      <p className="content">
        उनका संगीत के प्रति प्रेम बाल्यावस्था से ही विकसित हुआ और रामपुर दरबार के प्रमुख संगीतज्ञ 
        मिर्ज़ा नवाब हुसैन सहित अन्य संगीत उस्तादों के निर्देशन में परिपक्व हुआ। अपने विद्वतापूर्ण 
        दृष्टिकोण से, आचार्य ब्रह्मस्पति ने प्राचीन संगीत सिद्धांतों को आधुनिक अभ्यासों से जोड़ा। 
        उन्होंने ब्रह्मस्पति वीणा और श्रुतिदर्पण जैसे अनूठे वाद्य यंत्र बनाए, जिनका उपयोग 22 श्रुतियों 
        और प्राचीन भारतीय मूर्च्छना प्रणाली को प्रदर्शित करने के लिए किया गया।
      </p>
      <p className="content">
        आचार्य ब्रह्मस्पति एक महान शिक्षक भी थे। उन्होंने विभिन्न संस्थानों में संस्कृत और धर्मशास्त्र 
        के प्रोफेसर के रूप में कार्य किया और बाद में ऑल इंडिया रेडियो, दिल्ली में संस्कृत, ब्रजभाषा 
        और संगीत के मुख्य सलाहकार बने। संस्कृत समाचार प्रसारण शुरू करने में उनका महत्वपूर्ण योगदान 
        आज भी भारतीय संस्कृति के प्रति उनकी प्रतिबद्धता को दर्शाता है।
      </p>
      <p className="content">
        आचार्य ब्रह्मस्पति 31 जुलाई, 1979 को दिवंगत हो गए, लेकिन उनकी विरासत उनके शिष्यों, 
        जिनमें उस्ताद ग़ुलाम मुस्तफा ख़ान, विदूषी सुलोचना ब्रह्मस्पति, और कई अन्य शामिल हैं, 
        के माध्यम से जीवित है। भारतीय संगीत के सैद्धांतिक और व्यावहारिक दोनों पहलुओं में उनका 
        महत्वपूर्ण योगदान उन्हें कला और संस्कृति के क्षेत्र में एक चिरस्थायी प्रेरणा का स्रोत बनाता है।
      </p>

      <div className="footer">ACHARYA BRAHASPATI TRUST</div>
    </div>
  );
};



const AcharyaBrahaspati = () => {
  return (
      <div>
          <Acharya />
          <AboutUs />
          <Footer />
    </div>
  )
}

export default AcharyaBrahaspati