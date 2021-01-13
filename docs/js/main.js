function request(data, callback, callback_error){
	$.ajax({
		method: data.method || 'GET',
		url: data.url,
		data: data.data || {}
	}).then((response) => {
		callback(response)
	}).catch((error) => {
		console.error(error)
	})
}

function documentType(type){
	let initial = ""
  	switch(type){
		case "Registro Civil":
			initial = "RC"
			break
		case "Tarjeta de identidad":
			initial = "TI"
			break
		case "Cédula de ciudadania":
			initial = "CC"
			break
		case "Cédula de extranjería":
			initial = "CE"
			break
		case "Pasaporte":
			initial = "PA"
			break
		case "Menor sin identificar":
			initial = "MS"
			break
		case "Adulto sin identificar":
			initial = "AS"
			break
		case "Permiso especial de permanencia":
			initial = "PE"
			break
		case "Certificado de nacido vivo":
			initial = "CN"
			break
	  }
	  return initial
}

function optional(entry){
	if(entry === 0) return ''
	else return entry
}

function formatDate(date){
	console.log(date)
	let $date = date.split('/')
	$date[0] = ($date[0].length == 1) ? `0${$date[0]}` : $date[0]
	$date = $date.reverse().join('-')
	return moment($date)
}

function coordenate(type, data){
	switch (type){
		case 1: 
			switch (data){
				case 'RC':
					return {
						x: 7,
						y: 87
					}
					break
				case 'TI':
					return {
						x: 16,
						y: 87
					}
					break
				case 'CC':
					return {
						x: 25,
						y: 87
					}
					break
				case 'CE':
					return {
						x: 35.5,
						y: 87
					}
					break
				case 'PA':
					return {
						x: 47,
						y: 87
					}
					break
				case 'MS':
					return {
						x: 58.7,
						y: 87
					}
					break
				case 'AS':
					return {
						x: 70,
						y: 87
					}
					break
				case 'PE':
					return {
						x: 80.5,
						y: 87
					}
					break
				case 'CN':
					return {
						x: 90.5,
						y: 87
					}
					break
			}
			break
		case 2:
			switch (data){
				case 'Años':
					return {
						x: 81.5,
						y: 111.5
					}
					break
				case 'Días':
					return {
						x: 99,
						y: 111.5
					}
					break
				case 'Minutos':
					return {
						x: 116,
						y: 111.5
					}
					break
				case 'Meses':
					return {
						x: 81.5,
						y: 115.5
					}
					break
				case 'Horas':
					return {
						x: 99,
						y: 115.5
					}
					break
				case 'No aplica':
					return {
						x: 116,
						y: 115.5
					}
					break
			}
			break
		case 3:
			switch (data){
				case 'Masculino':
					return {
						x: 134.5,
						y: 111.5
					}
					break
				case 'Indeterminado':
					return {
						x: 153,
						y: 111.5
					}
					break
				case 'Femenino':
					return {
						x: 134.5,
						y: 115.5
					}
					break
			}
			break
		case 4:
			switch (data){
				case 'Cabecera municipal':
					return {
						x: 157,
						y: 124
					}
					break
				case 'Rural disperso':
					return {
						x: 188,
						y: 124
					}
					break
				case 'Centro poblado':
					return {
						x: 157,
						y: 128.5
					}
					break
			}
			break
		case 5:
			switch (data){
				case 'Excepción':
					return {
						x: 73.5,
						y: 148
					}
					break
				case 'Contributivo':
					return {
						x: 90.5,
						y: 148
					}
					break
				case 'No asegurado':
					return {
						x: 110,
						y: 148
					}
					break
				case 'Especial':
					return {
						x: 73.5,
						y: 152.5
					}
					break
				case 'Subsidiado':
					return {
						x: 90.5,
						y: 152.5
					}
					break
				case 'Indeterminado/pendiente':
					return {
						x: 110,
						y: 152.5
					}
					break
			}
			break
		case 6:
			switch (data){
				case 'Indígena':
					return {
						x: 36,
						y: 159.9
					}
					break
				case 'Rom, gitano':
					return {
						x: 82.5,
						y: 159.9
					}
					break
				case 'Raizal':
					return {
						x: 104,
						y: 159.9
					}
					break
				case 'Palenquero':
					return {
						x: 121.5,
						y: 159.9
					}
					break
				case 'Negro, mulato afro colombiano':
					return {
						x: 142.6,
						y: 159.9
					}
					break
				case 'Otro':
					return {
						x: 181.5,
						y: 159.9
					}
					break
			}
			break
		case 7: // clasificación de caso
			switch (data){
				case 'Sospechoso':
					return {
						x: 128.5,
						y: 212.5
					}
					break
				case 'Probable':
					return {
						x: 128.5,
						y: 216
					}
					break
				case 'Confirmado por laboratorio':
					return {
						x: 148.2,
						y: 212.5
					}
					break
				case 'Confirmado por clínica':
					return {
						x: 148.2,
						y: 216
					}
					break
				case 'Confirmado por nexo epidemiológico':
					return {
						x: 148.2,
						y: 219.2
					}
					break
			}
			break
		case 9:
			switch (data){
				case 'Sí':
					return {
						x: 189.5,
						y: 217.5
					}
					break
				case 'No':
					return {
						x: 200.2,
						y: 217
					}
					break
			}
			break
		case 10: // viaje a áreas de circulación
			switch (data){
				case 'Sí':
					return {
						x: 25,
						y: 86.2
					}
					break
				case 'No':
					return {
						x: 25,
						y: 92.5
					}
					break
			}
			break
		case 11: // viaje nacional
			switch (data){
				case 'Nacional':
					return {
						x: 70,
						y: 81.5
					}
					break
				case 'Internacional':
					return {
						x: 93.3,
						y: 81.2
					}
					break
			}
			break
		case 12: // viaje internacional
			switch (data){
				case 'Nacional':
					return {
						x: 93.3,
						y: 95.8
					}
					break
				case 'Internacional':
					return {
						x: 70,
						y: 95.8
					}
					break
			}
			break
		case 13: // contacto estrecho
			switch (data){
				case "Sí":
					return {
						x: 179.5,
						y: 105.5
					}
					break
				case 'No':
					return {
						x: 195.2,
						y: 106
					}
					break
			}
			break
		case 14: // síntomas
			switch (data){
				case 'Tos':
					return {
						x: 10.2,
						y: 120
					}
					break
				case 'Fiebre':
					return {
						x: 26.5,
						y: 120
					}
					break
				case 'Dolor de garganta':
					return {
						x: 47.2,
						y: 120
					}
					break
				case 'Dificultad respiratoria':
					return {
						x: 95.8,
						y: 120
					}
					break
				case 'Fatiga o adinamia':
					return {
						x: 130.2,
						y: 120
					}
					break
				case 'Rinorrea':
					return {
						x: 166.5,
						y: 120
					}
					break
				case 'Conjuntivitis':
					return {
						x: 186,
						y: 120
					}
					break
				case 'Cefalea':
					return {
						x: 10.2,
						y: 129
					}
					break
				case 'Diarrea':
					return {
						x: 34.5,
						y: 129
					}
					break
				case 'Pérdida del olfato o del gusto':
					return {
						x: 60.4,
						y: 129
					}
					break
				default:
					return {
						x: 105,
						y: 129,
						default: true
					}
					break
			}
			break
		case 15: // antecedentes
			switch (data){
				case 'Asma':
					return {
						x: 9,
			y: 154
					}
					break
				case 'EPOC':
					return {
						x: 30,
			y: 154
					}
					break
				case 'Diabetes':
					return {
						x: 51.5,
			y: 154
					}
					break
				case 'VIH':
					return {
						x: 77.8,
			y: 154
					}
					break
				case 'Enfermedad cardiaca':
					return {
						x: 94.7,
			y: 154
					}
					break
				case 'Cáncer':
					return {
						x: 121,
			y: 154
					}
					break
				case 'Malnutrición':
					return {
						x: 139,
			y: 154
					}
					break
				case 'Obesidad':
					return {
						x: 164.4,
			y: 154
					}
					break
				case 'Insuficiencia renal':
					return {
						x: 187.4,
			y: 154
					}
					break
				case 'Toma de medicamentos inmunosupresores':
					return {
						x: 9,
			y: 162.2
					}
					break
				case 'Fumador':
					return {
						x: 42,
			y: 162.2
					}
					break
				case 'Hipertensión':
					return {
						x: 63,
			y: 162.2
					}
					break
				case 'Tuberculosis':
					return {
						x: 87,
			y: 162.2
					}
					break
				default:
					return {
						x: 113,
			y: 162.2,
						default: true
					}
					break
			}
			break
	}
}