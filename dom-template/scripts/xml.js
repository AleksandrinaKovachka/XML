function createXMLDocument() {
    let documentImplementation = document.implementation;
    let doc = documentImplementation.createDocument(null, null);

    documentImplementation.createHTMLDocument();

    let gameCatalog = doc.createElement("game_catalog");
    let game = doc.createElement("game");

    let idGame = doc.createElement("id");
    let idGameNode = doc.createTextNode("1");
    let nameGame = doc.createElement("name");
    let nameGameNode = doc.createTextNode("Игра на тронове: Генезис");
    let noteGame = doc.createElement("note");
    let noteGameNode = doc.createTextNode("Играта е адаптация на книгата Песен за огън и лед");
    game.appendChild(idGame);
    idGame.appendChild(idGameNode);
    game.appendChild(nameGame);
    nameGame.appendChild(nameGameNode);
    game.appendChild(noteGame);
    noteGame.appendChild(noteGameNode);

    let developerGame = doc.createElement("developer");
    developerGame.setAttribute("isin","FR0000074072");
    let nameDeveloper = doc.createElement("name");
    let nameDeveloperNode = doc.createTextNode("Цианид");
    developerGame.appendChild(nameDeveloper);
    nameDeveloper.appendChild(nameDeveloperNode);

    let headquartersGame = doc.createElement("headquarters");
    let cityHeadquarters = doc.createElement("city");
    let cityHeadquartersNode = doc.createTextNode("Париж");
    let countryHeadquarters = doc.createElement("country");
    let countryHeadquartersNode = doc.createTextNode("Франция");
    let typeHeadquarters = doc.createElement("type");
    let typeHeadquartersNode = doc.createTextNode("дъщерна компания");
    headquartersGame.appendChild(cityHeadquarters);
    cityHeadquarters.appendChild(cityHeadquartersNode);
    headquartersGame.appendChild(countryHeadquarters);
    countryHeadquarters.appendChild(countryHeadquartersNode);
    headquartersGame.appendChild(typeHeadquarters);
    typeHeadquarters.appendChild(typeHeadquartersNode);
    developerGame.appendChild(headquartersGame);

    let companyInfoGame = doc.createElement("company_info");
    let numberEmployeesCompanyInfo = doc.createElement("number_employees");
    let numberEmployeesCompanyInfoNode = doc.createTextNode("110");
    let websiteCompanyInfo = doc.createElement("website");
    let websiteCompanyInfoNode = doc.createTextNode("cyanide-studio.com");
    let bossCompanyInfo = doc.createElement("boss");
    let bossCompanyInfoNode = doc.createTextNode("Патрик Плигерсдорфър");
    companyInfoGame.appendChild(numberEmployeesCompanyInfo);
    numberEmployeesCompanyInfo.appendChild(numberEmployeesCompanyInfoNode);
    companyInfoGame.appendChild(websiteCompanyInfo);
    websiteCompanyInfo.appendChild(websiteCompanyInfoNode);
    companyInfoGame.appendChild(bossCompanyInfo);
    bossCompanyInfo.appendChild(bossCompanyInfoNode);
    developerGame.appendChild(companyInfoGame);
    game.appendChild(developerGame);

    let publisherGame = doc.createElement("publisher");
    publisherGame.setAttribute("isin","FR0012419307");
    let namePublisher = doc.createElement("name");
    let namePublisherNode = doc.createTextNode("Фокус Хоум");
    publisherGame.appendChild(namePublisher);
    namePublisher.appendChild(namePublisherNode);

    let headquartersPublisherGame = doc.createElement("headquarters");
    let cityHeadquartersPublisher = doc.createElement("city");
    let cityHeadquartersPublisherNode = doc.createTextNode("Париж");
    let countryHeadquartersPublisher = doc.createElement("country");
    let countryHeadquartersPublisherNode = doc.createTextNode("Франция");
    let typeHeadquartersPublisher = doc.createElement("type");
    let typeHeadquartersPublisherNode = doc.createTextNode("дъщерна компания");
    headquartersPublisherGame.appendChild(cityHeadquartersPublisher);
    cityHeadquartersPublisher.appendChild(cityHeadquartersPublisherNode);
    headquartersPublisherGame.appendChild(countryHeadquartersPublisher);
    countryHeadquartersPublisher.appendChild(countryHeadquartersPublisherNode);
    headquartersPublisherGame.appendChild(typeHeadquartersPublisher);
    typeHeadquartersPublisher.appendChild(typeHeadquartersPublisherNode);
    publisherGame.appendChild(headquartersPublisherGame);

    let companyInfoPublisherGame = doc.createElement("company_info");
    let numberEmployeesCompanyInfoPublisher = doc.createElement("number_employees");
    let numberEmployeesCompanyInfoPublisherNode = doc.createTextNode("162");
    let websiteCompanyInfoPublisher = doc.createElement("website");
    let websiteCompanyInfoPublisherNode = doc.createTextNode("focus-home.com");
    let bossCompanyInfoPublisher = doc.createElement("boss");
    let bossCompanyInfoPublisherNode = doc.createTextNode("Цедрик Лагаригу");
    companyInfoPublisherGame.appendChild(numberEmployeesCompanyInfoPublisher);
    numberEmployeesCompanyInfoPublisher.appendChild(numberEmployeesCompanyInfoPublisherNode);
    companyInfoPublisherGame.appendChild(websiteCompanyInfoPublisher);
    websiteCompanyInfoPublisher.appendChild(websiteCompanyInfoPublisherNode);
    companyInfoPublisherGame.appendChild(bossCompanyInfoPublisher);
    bossCompanyInfoPublisher.appendChild(bossCompanyInfoPublisherNode);
    publisherGame.appendChild(companyInfoPublisherGame);
    game.appendChild(publisherGame);

    let typeGame = doc.createElement("type");
    let typeGameNode = doc.createTextNode("стратегическа");
    game.appendChild(typeGame);
    typeGame.appendChild(typeGameNode);

    let availableOnGame = doc.createElement("available_on");
    availableOnGame.setAttribute("platforms","1");
    game.appendChild(availableOnGame);

    let dataGame = doc.createElement("data");
    let dayDataGame = doc.createElement("day");
    dayDataGame.setAttribute("value","day");
    let dayDataGameNode = doc.createTextNode("28");
    let monthDataGame = doc.createElement("month");
    monthDataGame.setAttribute("value","month");
    let monthDataGameNode = doc.createTextNode("09");
    let yearDataGame = doc.createElement("year");
    yearDataGame.setAttribute("value","year");
    let yearDataGameNode = doc.createTextNode("2011");
    dataGame.appendChild(dayDataGame);
    dayDataGame.appendChild(dayDataGameNode);
    dataGame.appendChild(monthDataGame);
    monthDataGame.appendChild(monthDataGameNode);
    dataGame.appendChild(yearDataGame);
    yearDataGame.appendChild(yearDataGameNode);
    game.appendChild(dataGame);


    let countOfGame = doc.createElement("count_of");
    countOfGame.setAttribute("players","1");
    game.appendChild(countOfGame);

    let stillPlayingGame = doc.createElement("still_playing");
    stillPlayingGame.setAttribute("present","Да");
    game.appendChild(stillPlayingGame);

    gameCatalog.appendChild(game);

    doc.appendChild(gameCatalog);

    return doc;
}
