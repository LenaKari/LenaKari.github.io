var setLanguage = function(language) {
  // Right now this is always the same, but I've put it here in case this text changes at some point
  $('#english-select').html(lang.header.language_select.english);
  $('#german-select').html(lang.header.language_select.german);

  // Set language select in header
  if(language === 'german') {
    $('#german-select').addClass('selected');
    $('#english-select').removeClass('selected');
  } else {
    $('#english-select').addClass('selected');
    $('#german-select').removeClass('selected');
  }

  // Now set everything to the selected language!

    // Navigation text
    $('#navigation-home a').html(lang.header.navigation.home[language]);
    $('#navigation-services a').html(lang.header.navigation.services[language]);
    $('#navigation-references a').html(lang.header.navigation.references[language]);
    $('#navigation-about a').html(lang.header.navigation.about[language]);
    $('#navigation-application a').html(lang.header.navigation.application[language]);
    $('#navigation-contact a').html(lang.header.navigation.contact[language]);

    // Services text
    $('#services-title').html(lang.services.title[language]);
    $('#services-main-text').html(lang.services.main_text[language]);
    $('#services-subtitle-our-spectrum-title').html(lang.services.subtitle_our_spectrum.title[language]);
    $('#services-subtitle-our-spectrum-list').html(lang.services.subtitle_our_spectrum.list[language]);
    $('#services-subtitle-technical-support-title').html(lang.services.subtitle_technical_support.title[language]);
    $('#services-subtitle-technical-support-list').html(lang.services.subtitle_technical_support.list[language]);
    $('#services-subtitle-technical-equipment-title').html(lang.services.subtitle_technical_equipment.title[language]);
    $('#services-subtitle-technical-equipment-list').html(lang.services.subtitle_technical_equipment.list[language]);
    $('#services-subtitle-security-title').html(lang.services.subtitle_security.title[language]);
    $('#services-subtitle-security-list').html(lang.services.subtitle_security.list[language]);


    // About text
    $('#about-title').html(lang.about.title[language]);
    $('#about-blurb').html(lang.about.blurb[language]);
    $('#about-text').html(lang.about.text[language]);
    $('#about-subtitle').html(lang.about.subtitle[language]);


    // Application text
    $('#application-error-message').html(lang.application.error_message[language]);
    $('#application-title').html(lang.application.title[language]);
    $('#application-text').html(lang.application.text[language]);
    $('#application-experience-label').html(lang.application.experience.label[language]);
    $('#application-experience').html(lang.application.experience.options[language]);
    $('#application-first-name-label').html(lang.application.first_name[language]);
    $('#application-surname-label').html(lang.application.surname[language]);
    $('#application-gender-label').html(lang.application.gender.label[language]);
    $('#application-gender').html(lang.application.gender.options[language]);
    $('#application-address-label').html(lang.application.address[language]);
    $('#application-email-label').html(lang.application.email[language]);
    $('#application-phone-label').html(lang.application.phone[language]);
    $('#application-dob-label').html(lang.application.dob[language]);
    $('#application-native-language-label').html(lang.application.native_language[language]);
    $('#application-dialect-label').html(lang.application.dialect[language]);
    $('#application-voice-age-label').html(lang.application.voice_age[language]);
    $('#application-other-label').html(lang.application.other[language]);
    $('#application-submit-button').html(lang.application.button[language]);
    $('#application-submit-confirm').html(lang.application.modal[language]);
    $('#application-modal-button').html(lang.application.modal_button[language]);


    // Contact text
    $('#contact-title').html(lang.contact.title[language]);
    $('#contact-subtitle').html(lang.contact.subtitle[language]);
    $('#contact-address').html(lang.contact.address[language]);
    $('#contact-phone').html(lang.contact.phone[language]);
    $('#contact-fax').html(lang.contact.fax[language]);
    $('#contact-email').html(lang.contact.email[language]);
    $('#contact-view-map').html(lang.contact.map[language]);

    // Disclaimer text
    $('#disclaimer-title').html(lang.disclaimer.title[language]);
    $('#disclaimer-address').html(lang.disclaimer.address[language]);
    $('#disclaimer-phone').html(lang.disclaimer.phone[language]);
    $('#disclaimer-fax').html(lang.disclaimer.fax[language]);
    $('#disclaimer-email').html(lang.disclaimer.email[language]);
    $('#disclaimer-url').html(lang.disclaimer.url[language]);
    $('#disclaimer-additional-text').html(lang.disclaimer.additional_text[language]);
    $('#disclaimer-notice').html(lang.disclaimer.notice[language]);
    $('#disclaimer-copyright').html(lang.disclaimer.copyright[language]);


    // Footer text
    $('#footer-address-1').html(companyDetails.addressline1);
    $('#footer-address-2').html(companyDetails.addressline2);
    $('#footer-address-3').html(companyDetails.addressline3);
    $('#footer-phone').html(lang.footer.phone[language]);
    $('#footer-fax').html(lang.footer.fax[language]);
    $('#footer-email').html(companyDetails.email);
    $('#footer-link').html(lang.footer.link[language]);


    // Home text
    $('#home-title').html(lang.home.title[language]);
    $('#home-subtitle').html(lang.home.subtitle[language]);
    $('#home-text-1-title').html(lang.home.main_text_1.title[language]);
    $('#home-text-1-text').html(lang.home.main_text_1.text[language]);
    $('#home-text-2-title').html(lang.home.main_text_2.title[language]);
    $('#home-text-2-text').html(lang.home.main_text_2.text[language]);
    $('#home-text-3-title').html(lang.home.main_text_3.title[language]);
    $('#home-text-3-text').html(lang.home.main_text_3.text[language]);


    // Posters text
    if($('#posters').hasClass('hall-of-fame')) {
      $('#posters-title').html(lang.posters.hall_of_fame[language]);
      $('#movie-poster-1').attr('src', 'assets/img/posters/hall_of_fame/1.jpg');
      $('#movie-poster-2').attr('src', 'assets/img/posters/hall_of_fame/2.jpg');
      $('#movie-poster-3').attr('src', 'assets/img/posters/hall_of_fame/3.jpg');
      $('#movie-poster-4').attr('src', 'assets/img/posters/hall_of_fame/4.jpg');
      $('#movie-poster-5').attr('src', 'assets/img/posters/hall_of_fame/5.jpg');
      $('#movie-poster-6').attr('src', 'assets/img/posters/hall_of_fame/6.jpg');
    } else {
      $('#posters-title').html(lang.posters.recent_productions[language]);
      $('#movie-poster-1').attr('src', 'assets/img/posters/recent_productions/1.jpg');
      $('#movie-poster-2').attr('src', 'assets/img/posters/recent_productions/2.jpg');
      $('#movie-poster-3').attr('src', 'assets/img/posters/recent_productions/3.jpg');
      $('#movie-poster-4').attr('src', 'assets/img/posters/recent_productions/4.jpg');
      $('#movie-poster-5').attr('src', 'assets/img/posters/recent_productions/5.jpg');
      $('#movie-poster-6').attr('src', 'assets/img/posters/recent_productions/6.jpg');
    }

    // References text
    $('#references-title').html(lang.references.title[language]);
    $('#recent-series-title').html(lang.references.series.title[language]);
    $('#recent-series-list').html(lang.references.series.list[language]);
    $('#films-by-year-title').html(lang.references.film.title[language]);
    $('#2015 .reference-year-title').html(lang.references[2015].title[language]);
    $('#2015 .reference-year-list').html(lang.references[2015].list[language]);
    $('#2014 .reference-year-title').html(lang.references[2014].title[language]);
    $('#2014 .reference-year-list').html(lang.references[2014].list[language]);
    $('#2013 .reference-year-title').html(lang.references[2013].title[language]);
    $('#2013 .reference-year-list').html(lang.references[2013].list[language]);
    $('#hof-title').html(lang.references.hall_of_fame.title[language]);
    $('#hof-film-title').html(lang.references.hall_of_fame.film.title[language]);
    $('#hof-film-list').html(lang.references.hall_of_fame.film.list[language]);
    $('#hof-series-title').html(lang.references.hall_of_fame.series.title[language]);
    $('#hof-series-list').html(lang.references.hall_of_fame.series.list[language]);
};

setLanguage('german');
