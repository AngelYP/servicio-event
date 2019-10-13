'use strict'

const db = require('../')

async function run() {
  const config = {
    database: process.env.DB_NAME || 'servicio_event',
    username: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASS || 'uli',
    host: process.env.DB_HOST || 'localhost',
    dialect: 'postgres',
  }

  const { Guest } = await db(config).catch(handleFatalError)

  const guest1 = await Guest.create({
    name: 'JOSÉ ISAAC LABRA RIVERA',
    accompanied: true,
    accompanist: 'CELINDA SALGADO BRITO',
    email: 'unimorventas@hotmail.com',
    hotel: 'FIESTA INN ALTOZANO',
    invoice: 'OP226',
    attended: true,
    bus: null
  }).catch(handleFatalError)
  console.log('--guest--')
  console.log(guest1)


  const guest2 = await Guest.create({
    name: 'ALEJANDRO JARA SORIA',
    accompanied: true,
    accompanist: 'DOLORES RAMOS ORTEGA',
    email: 'tesoreria@canacintraens.org',
    hotel: 'HORIZON',
    invoice: 'OP200',
    attended: true,
    bus: null
  }).catch(handleFatalError)
  console.log('--guest--')
  console.log(guest2)


  const guest3 = await Guest.create({
    name: 'EDUARDO ENRIQUE ESCAMILLA SALGADO',
    accompanied: true,
    accompanist: 'INDRA YARIT ROMAN LOPEZ',
    email: 'enrique.escamilla@tailorplan.com',
    hotel: 'HORIZON',
    invoice: 'OP227 - OP228',
    attended: true,
    bus: null
  }).catch(handleFatalError)
  console.log('--guest--')
  console.log(guest3)


  const guest4 = await Guest.create({
    name: 'MIGUEL ANGEL TORO HERNÁNDEZ',
    accompanied: true,
    accompanist: 'LILLIÁN RÍOS Y VALLES',
    email: 'toro_hernandez_miguel_a@cat.com',
    hotel: 'GAMMA BELÓ',
    invoice: 'OP225',
    attended: true,
    bus: null
  }).catch(handleFatalError)
  console.log('--guest--')
  console.log(guest4)


  const guest5 = await Guest.create({
    name: 'ADRÍAN DÍAZ BARRIGA CHÁVEZ',
    accompanied: true,
    accompanist: 'MARIA DE LOURDES RANGEL SÁNCHEZ',
    email: 'adiaz.cconsultores@gmail.com',
    hotel: 'FIESTA INN ALTOZANO',
    invoice: 'OP212',
    attended: true,
    bus: null
  }).catch(handleFatalError)
  console.log('--guest--')
  console.log(guest5)


  const guest6 = await Guest.create({
    name: 'JESUS MARGARITA ELIZABETH RUIZ SANDEZ',
    accompanied: true,
    accompanist: 'EDMUNDO RAMIREZ OLIVAS',
    email: 'calibert@prodigy.net.mx',
    hotel: 'FIESTA INN ALTOZANO',
    invoice: 'OP214',
    attended: true,
    bus: null
  }).catch(handleFatalError)
  console.log('--guest--')
  console.log(guest6)


  const guest7 = await Guest.create({
    name: 'SOCORRO ROSARIO SOTO FERNANDEZ',
    accompanied: true,
    accompanist: 'ROSARIO JIMENEZ SOTO',
    email: 'lamarkt@hotmail.com',
    hotel: 'FIESTA INN ALTOZANO',
    invoice: 'OP213',
    attended: true,
    bus: null
  }).catch(handleFatalError)
  console.log('--guest--')
  console.log(guest7)


  const guest8 = await Guest.create({
    name: 'ADRIAN VENTURA LARA',
    accompanied: true,
    accompanist: 'MAYRA VANESSA MARTINEZ AVILA',
    email: 'adrian.ventura@integralmfc.com',
    hotel: 'HORIZON',
    invoice: 'OP231 - OP215',
    attended: true,
    bus: null
  }).catch(handleFatalError)
  console.log('--guest--')
  console.log(guest8)


  const guest9 = await Guest.create({
    name: 'AMALIA VIZCARRA BERUMEN',
    accompanied: true,
    accompanist: 'RUTH CHÁVEZ SOLIS',
    email: 'licamaliavizcarra@gmail.com',
    hotel: 'FIESTA INN ALTOZANO',
    invoice: 'OP216',
    attended: true,
    bus: null
  }).catch(handleFatalError)
  console.log('--guest--')
  console.log(guest9)


  const guest10 = await Guest.create({
    name: 'MARTIN GUTIERREZ GARCIA',
    accompanied: true,
    accompanist: 'MARIA LUISA GARDUÑO DE GUTIERREZ',
    email: 'mgutierrez@sagax.com.mx',
    hotel: 'HORIZON',
    invoice: 'OP229',
    attended: true,
    bus: null
  }).catch(handleFatalError)
  console.log('--guest--')
  console.log(guest10)


  const guest11 = await Guest.create({
    name: 'ABEL GRACIANO AGUAYO',
    accompanied: true,
    accompanist: 'ROSALVA RUIZ CAMPA',
    email: 'graciano@psmmexico.com',
    hotel: 'GAMMA BELÓ',
    invoice: 'OP230 - OP282',
    attended: true,
    bus: null
  }).catch(handleFatalError)
  console.log('--guest--')
  console.log(guest11)


  const guest12 = await Guest.create({
    name: 'SERGIO GONZÁLEZ GONZÁLEZ',
    accompanied: true,
    accompanist: 'VIRGINIA LETICIA CHAVEZ RIOS',
    email: 'facturas.bionat@gmail.com',
    hotel: 'NO',
    invoice: 'OP233',
    attended: true,
    bus: null
  }).catch(handleFatalError)
  console.log('--guest--')
  console.log(guest12)


  const guest13 = await Guest.create({
    name: 'GUILLERMO FEDERICO LASH DE LA FUENTE',
    accompanied: true,
    accompanist: 'LOURDES LARRAZOLO DE LASH',
    email: 'glash@glmanufacturas.com',
    hotel: 'NO',
    invoice: 'OP232',
    attended: true,
    bus: null
  }).catch(handleFatalError)
  console.log('--guest--')
  console.log(guest13)


  const guest14 = await Guest.create({
    name: 'JOSÉ DE JESÚS URIBE ZÚÑIGA',
    accompanied: true,
    accompanist: 'LILY VELÁZQUEZ',
    email: 'jesusuribe@me.com',
    hotel: 'HORIZON',
    invoice: 'OP242',
    attended: true,
    bus: null
  }).catch(handleFatalError)
  console.log('--guest--')
  console.log(guest14)


  const guest15 = await Guest.create({
    name: 'ROBERTO GONZÁLEZ MARTÍNEZ',
    accompanied: true,
    accompanist: 'JAZMIN DE LOS SANTOS ARELLANO',
    email: 'asistentedireccion@canacintra-leon.org.mx',
    hotel: 'FIESTA INN ALTOZANO',
    invoice: 'OP234',
    attended: true,
    bus: null
  }).catch(handleFatalError)
  console.log('--guest--')
  console.log(guest15)


  const guest16 = await Guest.create({
    name: 'GUILLERMO URSUA ALVAREZ',
    accompanied: true,
    accompanist: 'MARTHA ALICIA DIAZ DE URSUA',
    email: 'guillermoursua@grupoursua.net',
    hotel: 'HORIZON',
    invoice: 'OP241',
    attended: true,
    bus: null
  }).catch(handleFatalError)
  console.log('--guest--')
  console.log(guest16)


  const guest17 = await Guest.create({
    name: 'GILBERTO CEDILLO RIOS',
    accompanied: true,
    accompanist: 'ANA MARIA MARTINEZ',
    email: 'gilcedillomrcivm@gmail.com',
    hotel: 'GAMMA BELÓ',
    invoice: 'OP238',
    attended: true,
    bus: null
  }).catch(handleFatalError)
  console.log('--guest--')
  console.log(guest17)


  const guest18 = await Guest.create({
    name: 'JOSE MANUEL SANCHEZ CARRANCO',
    accompanied: true,
    accompanist: 'VIRNA ALEJANDRA VEGA BLANNO GARCÍA',
    email: 'josemanuel@casapublicidad.mx',
    hotel: 'GAMMA BELÓ',
    invoice: 'OP239',
    attended: true,
    bus: null
  }).catch(handleFatalError)
  console.log('--guest--')
  console.log(guest18)


  const guest19 = await Guest.create({
    name: 'MARTINO BARSSE NAVARRO',
    accompanied: true,
    accompanist: 'VANNIA YADIRA REYES RAMIREZ',
    email: 'mbarsse@fabinox.com',
    hotel: 'VILLA SAN JOSÉ',
    invoice: 'OP240',
    attended: true,
    bus: null
  }).catch(handleFatalError)
  console.log('--guest--')
  console.log(guest19)


  const guest20 = await Guest.create({
    name: 'MERCEDES PÉREZ VASCONCELOS',
    accompanied: true,
    accompanist: 'VIRIDIANA MAR DIAZ',
    email: 'juristaintegra@hotmail.com',
    hotel: 'FIESTA INN ALTOZANO',
    invoice: 'OP246',
    attended: true,
    bus: null
  }).catch(handleFatalError)
  console.log('--guest--')
  console.log(guest20)


  const guest21 = await Guest.create({
    name: 'STEEPHEN ARTURO MARTINEZ GUERRERO',
    accompanied: true,
    accompanist: 'LARISSA MÉNDEZ CEJAR',
    email: 'steephen@cideco.org',
    hotel: 'HORIZON',
    invoice: 'OP247',
    attended: true,
    bus: null
  }).catch(handleFatalError)
  console.log('--guest--')
  console.log(guest21)


  const guest22 = await Guest.create({
    name: 'JORGE ABEL CHARRUF CACERES',
    accompanied: true,
    accompanist: 'CLAUDINA GASQUE TORAYA',
    email: 'jorge.charruf@laanita.com',
    hotel: 'FIESTA INN ALTOZANO',
    invoice: 'OP264',
    attended: true,
    bus: null
  }).catch(handleFatalError)
  console.log('--guest--')
  console.log(guest22)


  const guest23 = await Guest.create({
    name: 'GABRIEL COVARRUBIAS LOMELÍ',
    accompanied: true,
    accompanist: 'ILLIAN ARES DE COVARRUBIAS',
    email: 'presidencia@canacintrapuebla.org.mx',
    hotel: 'GAMMA BELÓ',
    invoice: 'OP255',
    attended: true,
    bus: null
  }).catch(handleFatalError)
  console.log('--guest--')
  console.log(guest23)


  const guest24 = await Guest.create({
    name: 'JESUS HERRERA FRANCO',
    accompanied: true,
    accompanist: 'LAURA ELSA BAÑOS REYES',
    email: 'francoadmon@hotmail.com',
    hotel: 'GAMMA BELÓ',
    invoice: 'OP257',
    attended: true,
    bus: null
  }).catch(handleFatalError)
  console.log('--guest--')
  console.log(guest24)

  const guest25 = await Guest.create({
    name: 'LUIS FERNANDO PUERTO GUTIERREZ',
    accompanied: false,
    accompanist: '',
    email: 'direcciongeneral@canacintrayucatan.org.mx',
    hotel: 'FIESTA INN ALTOZANO',
    invoice: 'OP258',
    attended: true,
    bus: null
  }).catch(handleFatalError)
  console.log('--guest--')
  console.log(guest25)


  const guest26 = await Guest.create({
    name: 'ALBERTO JOSE ABRAHAM XACUR',
    accompanied: true,
    accompanist: 'DANIELA GASQUE TORAYA',
    email: 'ticoabraham@hotmail.com',
    hotel: 'FIESTA INN ALTOZANO',
    invoice: 'OP259',
    attended: true,
    bus: null
  }).catch(handleFatalError)
  console.log('--guest--')
  console.log(guest26)


  const guest27 = await Guest.create({
    name: 'ALEJANDRO GOMORY MARTINEZ',
    accompanied: true,
    accompanist: 'MARIANA DURAN CACERES',
    email: 'agm@galletasdonde.com',
    hotel: 'FIESTA INN ALTOZANO',
    invoice: 'OP261',
    attended: true,
    bus: null
  }).catch(handleFatalError)
  console.log('--guest--')
  console.log(guest27)


  const guest28 = await Guest.create({
    name: 'JAVIER GONZÁLEZ SIERRA',
    accompanied: true,
    accompanist: 'ADRIANA ROMERO SAVEDRA',
    email: 'cjgonzalez88@gmail.com',
    hotel: 'FIESTA INN ALTOZANO',
    invoice: 'OP267',
    attended: true,
    bus: null
  }).catch(handleFatalError)
  console.log('--guest--')
  console.log(guest28)


  const guest29 = await Guest.create({
    name: 'JOSE LUIS OROZCO LUQUE',
    accompanied: true,
    accompanist: 'DIANA BARRAZA RUBIO',
    email: 'dgml12@hotmail.com',
    hotel: 'FIESTA INN ALTOZANO',
    invoice: 'OP268',
    attended: true,
    bus: null
  }).catch(handleFatalError)
  console.log('--guest--')
  console.log(guest29)


  const guest30 = await Guest.create({
    name: 'GLADYS YAZMIN DURAN VARELA',
    accompanied: true,
    accompanist: 'DIANA GUZMAN ORQUIZ',
    email: 'duran2002@prodigy.net.mx',
    hotel: 'FIESTA INN ALTOZANO',
    invoice: 'OP271',
    attended: true,
    bus: null
  }).catch(handleFatalError)
  console.log('--guest--')
  console.log(guest30)


  const guest31 = await Guest.create({
    name: 'EVERARDO PADILLA FLORES',
    accompanied: true,
    accompanist: 'JOSÉ ANTONIO LAZCANO PONCE',
    email: 'alira@canacintra-saltillo.org.mx',
    hotel: 'FIESTA INN ALTOZANO',
    invoice: 'OP260',
    attended: true,
    bus: null
  }).catch(handleFatalError)
  console.log('--guest--')
  console.log(guest31)


  const guest32 = await Guest.create({
    name: 'PABLO NAVARRO GODINEZ',
    accompanied: true,
    accompanist: 'MARIA TERESA TENORIO TELLEZ',
    email: 'navarrogpablo@hotmail.com',
    hotel: 'GAMMA BELÓ',
    invoice: 'OP284',
    attended: true,
    bus: null
  }).catch(handleFatalError)
  console.log('--guest--')
  console.log(guest32)

  const guest33 = await Guest.create({
    name: 'NYDIA CAMPOS TENORIO',
    accompanied: false,
    accompanist: '',
    email: 'navarrogpablo@hotmail.com',
    hotel: 'GAMMA BELÓ',
    invoice: 'OP284',
    attended: true,
    bus: null
  }).catch(handleFatalError)
  console.log('--guest--')
  console.log(guest33)


  const guest34 = await Guest.create({
    name: 'JOSÉ N.ARIAS DÍAZ BARRIGA',
    accompanied: true,
    accompanist: 'MIRNA ZERMEÑO DE ARIAS',
    email: 'j.arias@azfinechem.com.mx',
    hotel: 'FIESTA INN ALTOZANO',
    invoice: 'OP283',
    attended: true,
    bus: null
  }).catch(handleFatalError)
  console.log('--guest--')
  console.log(guest34)


  const guest35 = await Guest.create({
    name: 'JUAN MANUEL GUERRA NORIEGA',
    accompanied: true,
    accompanist: 'MA.ELENA SALINAS',
    email: 'jguerra@tmimx.com',
    hotel: 'FIESTA INN ALTOZANO',
    invoice: 'OP286',
    attended: true,
    bus: null
  }).catch(handleFatalError)
  console.log('--guest--')
  console.log(guest35)

  const guest36 = await Guest.create({
    name: 'ROGELIO GARCIA TREVIÑO',
    accompanied: false,
    accompanist: '',
    email: 'rgarcia@publipak.com',
    hotel: 'VILLA SAN JOSÉ',
    invoice: 'OP289',
    attended: true,
    bus: null
  }).catch(handleFatalError)
  console.log('--guest--')
  console.log(guest36)


  const guest37 = await Guest.create({
    name: 'SERGIO ALEJANDRO ROLDAN',
    accompanied: true,
    accompanist: 'ADOLFO ALVAREZ',
    email: 'adolfo@smattcom.com',
    hotel: 'FIESTA INN ALTOZANO',
    invoice: 'OP287',
    attended: true,
    bus: null
  }).catch(handleFatalError)
  console.log('--guest--')
  console.log(guest37)


  const guest38 = await Guest.create({
    name: 'JORGE RIVADENEYRA DIAZ',
    accompanied: true,
    accompanist: 'GABRIELA GONZALEZ ALCALA',
    email: 'administracion@canacintraqro.org.mx',
    hotel: 'FIESTA INN ALTOZANO',
    invoice: 'OP288',
    attended: true,
    bus: null
  }).catch(handleFatalError)
  console.log('--guest--')
  console.log(guest38)


  const guest39 = await Guest.create({
    name: 'GABRIEL FIGUEROA URIBE',
    accompanied: true,
    accompanist: 'ROCIO GOMEZ RAMIREZ',
    email: 'administracion@canacintraqro.org.mx',
    hotel: 'FIESTA INN ALTOZANO',
    invoice: 'OP288',
    attended: true,
    bus: null
  }).catch(handleFatalError)
  console.log('--guest--')
  console.log(guest39)


  const guest40 = await Guest.create({
    name: 'ALFREDO SAHAGUN',
    accompanied: true,
    accompanist: 'MARICELA PEÑA NUÑEZ',
    email: 'administracion@canacintraqro.org.mx',
    hotel: 'FIESTA INN ALTOZANO',
    invoice: 'OP288',
    attended: true,
    bus: null
  }).catch(handleFatalError)
  console.log('--guest--')
  console.log(guest40)


  const guest41 = await Guest.create({
    name: 'PEDRO RUIZ VELAZCO',
    accompanied: true,
    accompanist: 'ADRIANA TALANCON',
    email: 'administracion@canacintraqro.org.mx',
    hotel: 'FIESTA INN ALTOZANO',
    invoice: 'OP288',
    attended: true,
    bus: null
  }).catch(handleFatalError)
  console.log('--guest--')
  console.log(guest41)


  const guest42 = await Guest.create({
    name: 'FERNANDO AMADOR',
    accompanied: true,
    accompanist: 'MONICA ALVARADO',
    email: 'asistente@canacintratorreon.org',
    hotel: 'GAMMA BELÓ',
    invoice: 'OP273',
    attended: true,
    bus: null
  }).catch(handleFatalError)
  console.log('--guest--')
  console.log(guest42)


  const guest43 = await Guest.create({
    name: 'OLIVIA VALADEZ LOPEZ',
    accompanied: true,
    accompanist: 'MIGUEL A.RODRIGUEZ VALADEZ',
    email: 'asistente@canacintratorreon.org',
    hotel: 'GAMMA BELÓ',
    invoice: 'OP273',
    attended: true,
    bus: null
  }).catch(handleFatalError)
  console.log('--guest--')
  console.log(guest43)


  const guest44 = await Guest.create({
    name: 'ALBINO BELMONTES ALVAREZ',
    accompanied: true,
    accompanist: 'CLAUDIA CORONADO HERNANDEZ',
    email: 'asistente@canacintratorreon.org',
    hotel: 'GAMMA BELÓ',
    invoice: 'OP273',
    attended: true,
    bus: null
  }).catch(handleFatalError)
  console.log('--guest--')
  console.log(guest44)


  const guest45 = await Guest.create({
    name: 'MARIO HERNANDEZ GONZALEZ',
    accompanied: true,
    accompanist: 'FERNANDO DUEÑAS',
    email: 'asistente@canacintratorreon.org',
    hotel: 'VILLA SAN JOSÉ',
    invoice: 'OP273',
    attended: true,
    bus: null
  }).catch(handleFatalError)
  console.log('--guest--')
  console.log(guest45)


  const guest46 = await Guest.create({
    name: 'CARLOS ROBERTO BRAÑA MUÑOZ',
    accompanied: true,
    accompanist: 'LORENA DE BRAÑA',
    email: 'asistente@canacintratorreon.org',
    hotel: 'GAMMA BELÓ',
    invoice: 'OP273',
    attended: true,
    bus: null
  }).catch(handleFatalError)
  console.log('--guest--')
  console.log(guest46)


  const guest47 = await Guest.create({
    name: 'ALEJANDRA HURTADO HERNANDEZ',
    accompanied: true,
    accompanist: 'MARTIN EDUARDO MEDINA CURIEL',
    email: 'asistente@canacintratorreon.org',
    hotel: 'GAMMA BELÓ',
    invoice: 'OP273',
    attended: true,
    bus: null
  }).catch(handleFatalError)
  console.log('--guest--')
  console.log(guest47)


  const guest48 = await Guest.create({
    name: 'FAUSTINO FERNANDEZ DIAZ GONZALEZ',
    accompanied: true,
    accompanist: 'BRUNA DUEÑAS GALLI',
    email: 'ffdg@admintotal.com',
    hotel: 'GAMMA BELÓ',
    invoice: 'OP317',
    attended: true,
    bus: null
  }).catch(handleFatalError)
  console.log('--guest--')
  console.log(guest48)


  const guest49 = await Guest.create({
    name: 'CARLOS ENRIQUE LARES PONCE',
    accompanied: true,
    accompanist: 'REYNA GABRIELA HINOJOSA VALENCIA',
    email: 'clares@absebasculas.com',
    hotel: 'GAMMA BELÓ',
    invoice: 'OP292',
    attended: true,
    bus: null
  }).catch(handleFatalError)
  console.log('--guest--')
  console.log(guest49)


  const guest50 = await Guest.create({
    name: 'CESAR ESTRADA SOLIS',
    accompanied: true,
    accompanist: 'ROSALIA MARTINEZ',
    email: 'mreza@conadiac.org.mx',
    hotel: 'FIESTA INN ALTOZANO',
    invoice: 'OP298',
    attended: true,
    bus: null
  }).catch(handleFatalError)
  console.log('--guest--')
  console.log(guest50)


  const guest51 = await Guest.create({
    name: 'EDUARDO MEDINA CARBAJAL',
    accompanied: true,
    accompanist: 'YANETTE GARCIA ACOSTA',
    email: 'lalomc76b@gmail.com',
    hotel: 'GAMMA BELÓ',
    invoice: 'OP296',
    attended: true,
    bus: null
  }).catch(handleFatalError)
  console.log('--guest--')
  console.log(guest51)


  const guest52 = await Guest.create({
    name: 'MA.JESUS FLORES SALDAÑA',
    accompanied: true,
    accompanist: 'JOANA BERENICIE CERVANTES FLORES',
    email: 'facturas@prealtamira.com',
    hotel: 'HORIZON',
    invoice: 'OP297',
    attended: true,
    bus: null
  }).catch(handleFatalError)
  console.log('--guest--')
  console.log(guest52)


  const guest53 = await Guest.create({
    name: 'JOSE LUIS LOPEZ LOZADA',
    accompanied: true,
    accompanist: 'CONCEPCION SALAZAR ROMERO',
    email: 'direccionafinap@gmail.com',
    hotel: 'FIESTA INN ALTOZANO',
    invoice: 'OP306',
    attended: true,
    bus: null
  }).catch(handleFatalError)
  console.log('--guest--')
  console.log(guest53)


  const guest54 = await Guest.create({
    name: 'JOSE EUGENIO LAGARDE AMAYA',
    accompanied: true,
    accompanist: 'KRISTELLE FEUCHTER BORBOA',
    email: 'asistente.direccion@canacintra.com',
    hotel: 'NO',
    invoice: 'OP293',
    attended: true,
    bus: null
  }).catch(handleFatalError)
  console.log('--guest--')
  console.log(guest54)


  const guest55 = await Guest.create({
    name: 'CLAUDIA E.MENDEZ MANZANO',
    accompanied: true,
    accompanist: 'JORGE EDUARDO CORTES RIOS',
    email: 'meclaudiam@hotmail.com',
    hotel: 'FIESTA INN ALTOZANO',
    invoice: 'OP318',
    attended: true,
    bus: null
  }).catch(handleFatalError)
  console.log('--guest--')
  console.log(guest55)


  const guest56 = await Guest.create({
    name: 'HECTOR HORACIO DAVILA RODRIGUEZ',
    accompanied: true,
    accompanist: 'PATRICIA HERNÁNDEZ',
    email: 'horaciodelante@prodigy.net.mx',
    hotel: 'GAMMA BELÓ',
    invoice: 'OP273',
    attended: true,
    bus: null
  }).catch(handleFatalError)
  console.log('--guest--')
  console.log(guest56)


  const guest57 = await Guest.create({
    name: 'LUIS FELIPE HERNÁNDEZ CAMARERO',
    accompanied: true,
    accompanist: 'TERESA DE JESÚS TIBURCIO ARANO',
    email: 'lufeheca_56@hotmail.com',
    hotel: 'GAMMA BELÓ',
    invoice: 'OP340',
    attended: true,
    bus: null
  }).catch(handleFatalError)
  console.log('--guest--')
  console.log(guest57)


  const guest58 = await Guest.create({
    name: 'MIGUEL ANGEL MANJARREZ BELTRAN',
    accompanied: true,
    accompanist: 'MARIA ORALIA FELIX GARCIA',
    email: 'miguelangel@manjarrezimpresores.com.mx',
    hotel: 'VILLA SAN JOSÉ',
    invoice: 'OP319',
    attended: true,
    bus: null
  }).catch(handleFatalError)
  console.log('--guest--')
  console.log(guest58)


  const guest59 = await Guest.create({
    name: 'ALVARO RODRIGUEZ GARCIA',
    accompanied: true,
    accompanist: 'SIGIFREDO SÁNCHEZ VARGAS',
    email: 'rodalvaro7@gmail.com',
    hotel: 'GAMMA BELÓ',
    invoice: 'OP312',
    attended: true,
    bus: null
  }).catch(handleFatalError)
  console.log('--guest--')
  console.log(guest59)


  const guest60 = await Guest.create({
    name: 'ANA MARGARITA COYAC MOLINA',
    accompanied: true,
    accompanist: 'CLAUDIA AGUILAR N',
    email: 'imprentaimpresosjl@gmail.com',
    hotel: 'FIESTA INN ALTOZANO',
    invoice: 'OP303',
    attended: true,
    bus: null
  }).catch(handleFatalError)
  console.log('--guest--')
  console.log(guest60)


  const guest61 = await Guest.create({
    name: 'ARISTOTELES MARTINEZ MONDRAGON',
    accompanied: true,
    accompanist: 'ANA GABRIELA ESTRADA GARCIA',
    email: 'administracion@conaseg.com.mx',
    hotel: 'VILLA SAN JOSÉ',
    invoice: 'OP291',
    attended: true,
    bus: null
  }).catch(handleFatalError)
  console.log('--guest--')
  console.log(guest61)


  const guest62 = await Guest.create({
    name: 'ROGELIO GABRIEL ROSAS ESTRADA',
    accompanied: true,
    accompanist: 'ARISTOTELES MARTINEZ ESTRADA',
    email: 'administracion@conaseg.com.mx',
    hotel: 'VILLA SAN JOSÉ',
    invoice: 'OP291',
    attended: true,
    bus: null
  }).catch(handleFatalError)
  console.log(guest62)

  const guest63 = await Guest.create({
    name: 'EURIPIDES GREGORIO VALLE RUIZ',
    accompanied: false,
    accompanist: '',
    email: 'facturacioncanacintra@gmail.com',
    hotel: 'FIESTA INN ALTOZANO',
    invoice: 'OP301',
    attended: true,
    bus: null
  }).catch(handleFatalError)
  console.log('--guest--')
  console.log(guest63)


  const guest64 = await Guest.create({
    name: 'EFREN HERNANDEZ CASTILLO',
    accompanied: true,
    accompanist: 'MARIA IZABET HERNANDEZ MURILLO',
    email: 'delmar.agenciadeseguros@gmail.com',
    hotel: 'VILLA SAN JOSÉ',
    invoice: 'OP320',
    attended: true,
    bus: null
  }).catch(handleFatalError)
  console.log(guest64)

  const guest65 = await Guest.create({
    name: 'CARLOS SALCEDO ALATRISTE',
    accompanied: false,
    accompanist: '',
    email: 'salcedo@sayes.com.mx',
    hotel: 'HORIZON',
    invoice: 'OP302',
    attended: true,
    bus: null
  }).catch(handleFatalError)
  console.log('--guest--')
  console.log(guest65)

  const guest66 = await Guest.create({
    name: 'LORENZO MIGUEL OLIVARES JUÁREZ',
    accompanied: true,
    accompanist: 'VÍCTOR MANUEL SALVATIERRA DELGADO',
    email: 'miguel_olivares22@yahoo.com.mx',
    hotel: 'FIESTA INN ALTOZANO',
    invoice: '',
    attended: true,
    bus: null
  }).catch(handleFatalError)
  console.log('--guest--')
  console.log(guest66)


  const guest67 = await Guest.create({
    name: 'NORMA LETICIA FLORES BERRIOS',
    accompanied: true,
    accompanist: 'STEFFANI PAULINA YAÑEZ FLORES',
    email: 'factura.cartogreen@gmail.com',
    hotel: 'NO',
    invoice: 'OP311',
    attended: true,
    bus: null
  }).catch(handleFatalError)
  console.log('--guest--')
  console.log(guest67)

  const guest68 = await Guest.create({
    name: 'JUAN CASTILLO LEMUS',
    accompanied: true,
    accompanist: 'MARGARITA SANTOYO MARTÍNEZ',
    email: 'juan.castillo@mane.com',
    hotel: 'FIESTA INN ALTOZANO',
    attended: true,
    bus: null
  }).catch(handleFatalError)
  console.log('--guest--')
  console.log(guest68)

  const guest69 = await Guest.create({
    name: 'JESÚS GRANADOS CAMPOS',
    accompanied: true,
    accompanist: 'MARÍA ANTONIETA CONTRERAS LAGUNA',
    email: 'jgranados@coindissa.com.mx',
    hotel: 'FIESTA INN ALTOZANO',
    attended: true,
    bus: null
  }).catch(handleFatalError)
  console.log('--guest--')
  console.log(guest69)


  const guest70 = await Guest.create({
    name: 'FRANCISCO TOBIAS RODRIGUEZ',
    accompanied: true,
    accompanist: 'ANA RUBI GARCIA',
    email: 'direcciongeneral@maresa.biz',
    hotel: 'FIESTA INN ALTOZANO',
    invoice: 'OP304',
    attended: true,
    bus: null
  }).catch(handleFatalError)
  console.log('--guest--')
  console.log(guest70)


  const guest71 = await Guest.create({
    name: 'JOSÉ JORGE SANDOVAL MARTÍNEZ',
    accompanied: true,
    accompanist: 'HÉCTOR JARQUÍN SÁNCHEZ',
    email: 'jorge.sandoval@corp-imt.com',
    hotel: 'FIESTA INN ALTOZANO',
    invoice: 'OP324',
    attended: true,
    bus: null
  }).catch(handleFatalError)
  console.log('--guest--')
  console.log(guest71)

  const guest72 = await Guest.create({
    name: 'JORGE VASQUEZ DEL MERCARDO Y MARIN',
    accompanied: true,
    accompanist: 'ELSA MOCTEZUMA Y ARVIZU',
    email: 'vamj42@gmail.com',
    hotel: 'GAMMA BELÓ',
    attended: true,
    bus: null
  }).catch(handleFatalError)
  console.log('--guest--')
  console.log(guest72)

  const guest73 = await Guest.create({
    name: 'JOSE GUADALUPE LEAL CORONA',
    accompanied: true,
    accompanist: 'YOLANDA EUGENIA BARRAGAN MURILLO',
    email: 'axnpeople1@hotmail.com',
    hotel: 'HORIZON',
    attended: true,
    bus: null
  }).catch(handleFatalError)
  console.log('--guest--')
  console.log(guest73)

  const guest74 = await Guest.create({
    name: 'IMELDA ASUNCION MEZA PARRILLA',
    accompanied: true,
    accompanist: '',
    email: 'presidencia@canacintraem.org.mx',
    hotel: 'FIESTA INN ALTOZANO',
    invoice: 'OP328',
    attended: true,
    bus: null
  }).catch(handleFatalError)
  console.log('--guest--')
  console.log(guest74)

  const guest75 = await Guest.create({
    name: 'JOSE ANTONIO MENDEZ GARCIA',
    accompanied: true,
    accompanist: 'NORALIA RODRIGUEZ',
    email: 'antoniomaasa@hotmail.com',
    hotel: 'NO',
    invoice: 'OP326',
    attended: true,
    bus: null
  }).catch(handleFatalError)
  console.log('--guest--')
  console.log(guest75)


  const guest76 = await Guest.create({
    name: 'JUAN MANUEL NAVARRO TELLEZ',
    accompanied: true,
    accompanist: 'FELIPE MORALES DOLORES',
    email: 'tehuacan@canacintra.org.mx',
    hotel: 'HORIZON',
    invoice: 'OP330',
    attended: true,
    bus: null
  }).catch(handleFatalError)
  console.log('--guest--')
  console.log(guest76)

  const guest77 = await Guest.create({
    name: 'CLAUDIA MANRÍGUEZ GARDEA',
    accompanied: true,
    accompanist: 'HÉCTOR VARGAS GARCÍA',
    email: 'alfagama123@yahoo.com',
    hotel: 'alfagama123@yahoo.com',
    invoice: 'FIESTA INN ALTOZANO',
    attended: true,
    bus: null
  }).catch(handleFatalError)
  console.log('--guest--')
  console.log(guest77)


  const guest78 = await Guest.create({
    name: 'MÓNICA DE JESÚS PÉREZ MORALES',
    accompanied: true,
    accompanist: 'MIGUEL ÁNGEL VÁZQUEZ MALDONADO',
    email: 'factura@cyssima.com.mx',
    hotel: 'FIESTA INN ALTOZANO',
    invoice: 'OP339',
    attended: true,
    bus: null
  }).catch(handleFatalError)
  console.log('--guest--')
  console.log(guest78)


  const guest79 = await Guest.create({
    name: 'OSCAR GEOVANI ORTEGA PONCE',
    accompanied: true,
    accompanist: 'GRISEL CENOBIO VAZQUEZ',
    email: 'administracion@cociramax.com',
    hotel: 'GAMMA BELÓ',
    invoice: 'OP327',
    attended: true,
    bus: null
  }).catch(handleFatalError)
  console.log('--guest--')
  console.log(guest79)


  const guest80 = await Guest.create({
    name: 'FRANCISCO ALVAREZ AGUILAR',
    accompanied: true,
    accompanist: 'ALFREDO SALAZAR ZAMORA',
    email: 'francisco.newteclab@gmail.com',
    hotel: 'GAMMA BELÓ',
    invoice: 'OP325',
    attended: true,
    bus: null
  }).catch(handleFatalError)
  console.log('--guest--')
  console.log(guest80)


  const guest81 = await Guest.create({
    name: 'BALTAZAR MARTÍNEZ QUIROZ',
    accompanied: true,
    accompanist: 'ESPINOSA QUIROZ GLORIA',
    email: 'rh@solucionesquimicasglobales.com.mx',
    hotel: 'FIESTA INN ALTOZANO',
    invoice: 'OP338',
    attended: true,
    bus: null
  }).catch(handleFatalError)
  console.log('--guest--')
  console.log(guest81)


  const guest82 = await Guest.create({
    name: 'CARLOS PAUL BREMER BACA',
    accompanied: true,
    accompanist: 'SALVADOR CALDERON AGUIRRE',
    email: 'carlosbremerbaca@gmail.com',
    hotel: 'GAMMA BELÓ',
    invoice: 'OP341',
    attended: true,
    bus: null
  }).catch(handleFatalError)
  console.log('--guest--')
  console.log(guest82)


  const guest83 = await Guest.create({
    name: 'ELVIA NORIEGA HERNÁNDEZ',
    accompanied: true,
    accompanist: 'LIDIANA OLIVER GARCÍA',
    email: 'pachuca@canacintra.org.mx',
    hotel: 'HORIZON',
    invoice: 'OP342',
    attended: true,
    bus: null
  }).catch(handleFatalError)
  console.log('--guest--')
  console.log(guest83)


  const guest84 = await Guest.create({
    name: 'ERIDANI RIOS ROMERO',
    accompanied: true,
    accompanist: 'NELY ESTEFANIA SANTOS RUIZ',
    email: 'gerencia@canacintrasjr.com',
    hotel: 'HORIZON',
    invoice: 'OP343',
    attended: true,
    bus: null
  }).catch(handleFatalError)
  console.log('--guest--')
  console.log(guest84)


  const guest85 = await Guest.create({
    name: 'JOSE GUADALUPE ROMAN FLORES',
    accompanied: true,
    accompanist: 'GABRIELA ORTEGA DE ROMAN',
    email: 'gerencia@canacintrasjr.com',
    hotel: 'GAMMA BELÓ',
    invoice: 'OP345',
    attended: true,
    bus: null
  }).catch(handleFatalError)
  console.log('--guest--')
  console.log(guest85)


  const guest86 = await Guest.create({
    name: 'MARTHA TISCAREÑO ALONSO',
    accompanied: true,
    accompanist: 'MA.DE LOURDES CHIRINO HELGUERA',
    email: 'martha@garantiaplena.com.mx',
    hotel: 'GAMMA BELÓ',
    invoice: 'OP305',
    attended: true,
    bus: null
  }).catch(handleFatalError)
  console.log('--guest--')
  console.log(guest86)

  const guest87 = await Guest.create({
    name: 'GUADALUPE MAYORGA MALABEHAR',
    accompanied: true,
    accompanist: 'ENRIQUE CONTRERAS BARRÓN',
    hotel: 'GAMMA BELÓ',
    attended: true,
    bus: null
  }).catch(handleFatalError)
  console.log('--guest--')
  console.log(guest87)

  const guest88 = await Guest.create({
    name: 'KAREN YADIRA SANTANDER GUADARRAMA',
    accompanied: true,
    accompanist: '*',
    email: 'ksantander@papilia.net',
    hotel: 'GAMMA BELÓ',
    attended: true,
    bus: null
  }).catch(handleFatalError)
  console.log('--guest--')
  console.log(guest88)

  const guest89 = await Guest.create({
    name: 'KARLA ERIKA LÓPEZ JURADO',
    accompanied: true,
    accompanist: 'CARLOS MANUEL LÓPEZ JURADO',
    email: 'kossmekelj@hotmail.com',
    hotel: 'GAMMA BELÓ',
    attended: true,
    bus: null
  }).catch(handleFatalError)
  console.log('--guest--')
  console.log(guest89)

  const guests = await Guest.findAll().catch(handleFatalError)
  console.log('--guests--')
  console.log(guests)
}

function handleFatalError (err) {
    console.error(err.message)
    console.error(err.stack)
    process.exit(1)
}

run()