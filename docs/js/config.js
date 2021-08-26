function datos_basicos(row){
	let eps = row['EPS']
	let eps_code = (eps.split(' | ').length == 1) ? '' : eps.split(' | ').pop()
	eps = eps.split(' | ').shift()
	let rise_country = row['País de origen'].toString()
	let rise_country_code = (rise_country.toLowerCase() == 'colombia') ? '170' : ''
	let residence_country = row['País de residencia'].toString()
	let residence_country_code = (rise_country.toLowerCase() == 'colombia') ? '170' : ''
	let occurrence_country = row['País de ocurrencia'].toString()
	let occurrence_country_code = (occurrence_country.toLowerCase() == 'colombia') ? '170' : ''
	let residence_city = ''
	Object.keys(row).forEach((key) => {
		if(key.indexOf('Municipio de residencia') >= 0 && row[key] != 0) residence_city = row[key] 
  	})
	let residence_city_code = (residence_city.split(' | ').length == 1) ? '' : residence_city.split(' | ').pop()
	residence_city = (residence_city.split(' | ').length == 1) ? residence_city : residence_city.split(' | ')[0]
	let residence_department = row['Departamento de residencia']
	let residence_department_code = (residence_department.split(' | ').length == 1) ? '' : residence_department.split(' | ').pop()
	residence_department = residence_department.split(' | ').shift()
	let occurrence_department = row['Departamento de ocurrencia']
	let occurrence_department_code = (occurrence_department.split(' | ').length == 1) ? '' : occurrence_department.split(' | ').pop()
	occurrence_department = occurrence_department.split(' | ').shift()

	let occurrence_city = ''
	Object.keys(row).forEach((key) => {
		if(key.indexOf('Municipio de ocurrencia') >= 0 && row[key] != 0) occurrence_city = row[key] 
  	})
	let occurrence_city_code = (occurrence_city.split(' | ').length == 1) ? '' : occurrence_city.split(' | ').pop()
	occurrence_city = (occurrence_city.split(' | ').length == 1) ? occurrence_city : occurrence_city.split(' | ')[0]

	let job = row['Ocupación']
	let job_code = (job.split(' | ').length == 1) ? '' : job.split(' | ').pop()
	job = job.split(' | ').shift()

	return [
		{
			text: '15',
			x: 11,
			y: 53.5,
			charSpace: 3.5
		},
		{
			text: '407',
			x: 26.5,
			y: 53.5,
			charSpace: 3.5
		},
		{
			text: '00841',
			x: 46.5,
			y: 53.5,
			charSpace: 3.5
		},
		{
			text: '01',
			x: 78.5,
			y: 53.5,
			charSpace: 3.5
		},
		{
			text: 'E.S.E Hospital San Francisco de Villa de Leyva',
			x: 94,
			y: 58
		},
		{
			text: row['Seleccione ficha a diligenciar'].split(' - ').pop(),
			x: 8,
			y: 69
		},
		{
			text: row['Seleccione ficha a diligenciar'].split(' - ').shift(),
			x: 105,
			y: 68,
			charSpace: 3.5
		},
		{
			text: formatDate(row['Marca temporal'].split(' ').shift()).format('DD'),
			x: 128.5,
			y: 68,
			charSpace: 3.5
		},
		{
			text: formatDate(row['Marca temporal'].split(' ').shift()).format('MM'),
			x: 144.5,
			y: 68,
			charSpace: 3.5
		},
		{
			text: formatDate(row['Marca temporal'].split(' ').shift()).format('yyyy'),
			x: 160,
			y: 68,
			charSpace: 3.5
		},
		{
			text: 'x',
			x: coordenate(1, documentType(row['Tipo de Documento'])).x,
			y: coordenate(1, documentType(row['Tipo de Documento'])).y
		},
		{
			text: row['Número de identificación'].toString(),
			x: 136,
			y: 88
		},
		{
			text: `${row['Nombres']} ${row['Apellidos']}`,
			x: 8,
			y: 102
		},
		{
			text: row['Teléfono'].toString(),
			x: 165,
			y: 102
		},
		{
			text: row['Edad'].toString(),
			x: 69,
			y: 115.5
		},
		{
			text: 'x',
			x: coordenate(2, row['Unidad medida de edad']).x,
			y: coordenate(2, row['Unidad medida de edad']).y
		},
		{
			text: 'x',
			x: coordenate(3, row['Sexo']).x,
			y: coordenate(3, row['Sexo']).y
		},
		{
			text: formatDate(row['Fecha de Nacimiento']).format('DD'),
			x: 9,
			y: 113.8,
			charSpace: 3.5
		},
		{
			text: formatDate(row['Fecha de Nacimiento']).format('MM'),
			x: 24.5,
			y: 113.8,
			charSpace: 3.5
		},
		{
			text: formatDate(row['Fecha de Nacimiento']).format('yyyy'),
			x: 40,
			y: 113.8,
			charSpace: 3.5
		},
		{
			text: rise_country_code,
			x: 195,
			y: 109,
			charSpace: 2.8
		},
		{
			text: rise_country,
			x: 175,
			y: 116
		},
		{
			text: occurrence_country,
			x: 8,
			y: 128
		},
		{
			text: occurrence_country_code,
			x: 57,
			y: 124,
			charSpace: 3.2
		},
		{
			text: `${occurrence_department}/${occurrence_city}`,
			x: 76,
			y: 128
		},
		{
			text: occurrence_department_code,
			x: 123,
			y: 127,
			charSpace: 3.2
		},
		{
			text: occurrence_city_code,
			x: 139,
			y: 127,
			charSpace: 3.2
		},
		{
			text: 'x',
			x: coordenate(4, row['Área de ocurrencia']).x,
			y: coordenate(4, row['Área de ocurrencia']).y
		},
		{
			text: row['Localidad'],
			x: 8,
			y: 139
		},
		{
			text: row['Barrio'],
			x: 66,
			y: 139
		},
		{
			text: row['Área de ocurrencia'],
			x: 110,
			y: 139
		},
		{
			text: row['Vereda'],
			x: 167,
			y: 139
		},
		{
			text: job,
			x: 7.5,
			y: 154.2,
			limit: true,
			limitChar: 50
		},
		{
			text: job_code,
			x: 49.9,
			y: 149.5,
			charSpace: 3.5
		},
		{
			text: 'x',
			x: coordenate(5, row['Régimen']).x,
			y: coordenate(5, row['Régimen']).y
		},
		{
			text: eps,
			x: 141,
			y: 154.5,
			limit: true,
			limitChar: 50
		},
		{
			text: eps_code,
			x: 175,
			y: 150,
			charSpace: 3.25
		},
		{
			text: 'x',
			x: coordenate(6, row['Pertenencia étnica']).x,
			y: coordenate(6, row['Pertenencia étnica']).y
		},
		{
			text: row['Estrato'].toString(),
			x: 194,
			y: 162
		},
		{
			text: 'x',
			x: 6.5,
			y: 190.5
		},
		{
			text: `${residence_country}/${residence_department}/${residence_city}`,
			x: 68,
			y: 197
		},
		{
			text: residence_country_code,
			x: 158,
			y: 194.5,
			charSpace: 3.5
		},
		{
			text: residence_department_code,
			x: 177,
			y: 194.5,
			charSpace: 3.5
		},
		{
			text: residence_city_code,
			x: 191,
			y: 194.5,
			charSpace: 3.5
		},
		{
			text: row['Dirección de residencia'],
			x: 44,
			y: 203
		},
		{
			text: formatDate(row['Marca temporal'].split(' ').shift()).format('DD'),
			x: 7.5,
			y: 216.5,
			charSpace: 3.5
		},
		{
			text: formatDate(row['Marca temporal'].split(' ').shift()).format('MM'),
			x: 23.5,
			y: 216.5,
			charSpace: 3.5
		},
		{
			text: formatDate(row['Marca temporal'].split(' ').shift()).format('yyyy'),
			x: 39,
			y: 216.5,
			charSpace: 3.5
		},
		{
			text: formatDate(row['Fecha de inicio de los síntomas']).format('DD'),
			x: 69.5,
			y: 216.5,
			charSpace: 3.5
		},
		{
			text: formatDate(row['Fecha de inicio de los síntomas']).format('MM'),
			x: 85.5,
			y: 216.5,
			charSpace: 3.5
		},
		{
			text: formatDate(row['Fecha de inicio de los síntomas']).format('yyyy'),
			x: 101,
			y: 216.5,
			charSpace: 3.5
		},
		{
			text: 'x',
			x: coordenate(7, row['Clasificación del caso']).x,
			y: coordenate(7, row['Clasificación del caso']).y
		},
		{
			text: 'x',
			x: coordenate(9, row['Hospitalizado']).x,
			y: coordenate(9, row['Hospitalizado']).y
		},
		{
			text: (row['Fecha de hospitalización']) ? formatDate(row['Fecha de hospitalización']).format('DD') : '',
			x: 7.5,
			y: 233,
			charSpace: 3.5
		},
		{
			text: (row['Fecha de hospitalización']) ? formatDate(row['Fecha de hospitalización']).format('MM') : '',
			x: 23.5,
			y: 233,
			charSpace: 3.5
		},
		{
			text: (row['Fecha de hospitalización']) ? formatDate(row['Fecha de hospitalización']).format('yyyy') : '',
			x: 39,
			y: 233,
			charSpace: 3.5
		},
		{
			text: (row['Fecha de defunción']) ? formatDate(row['Fecha de defunción']).format('DD') : '',
			x: 94.5,
			y: 233,
			charSpace: 3.5
		},
		{
			text: (row['Fecha de defunción']) ? formatDate(row['Fecha de defunción']).format('MM') : '',
			x: 109.5,
			y: 233,
			charSpace: 3.5
		},
		{
			text: (row['Fecha de defunción']) ? formatDate(row['Fecha de defunción']).format('yyyy') : '',
			x: 125,
			y: 233,
			charSpace: 3.5
		},
		{
			text: 'x',
			x: 64,
			y: 228
		},
		{
			text: optional(row['N° Certificado de defunción']).toString(),
			x: 150,
			y: 235
		},
		{
			text: optional(row['Causa básica de la muerte']),
			x: 8,
			y: 246
		},
		{
			text: row['Nombre de quien diligencia la ficha'],
			x: 84,
			y: 246
		},
		{
			text: row['Teléfono de quien diligencia la ficha'].toString(),
			x: 175,
			y: 246
		}
	]
}

function ficha_346(row){
	let department = row['Departamento'] || ''
	let department_code = (department.split(' | ').length == 1) ? '' : department.split(' | ').pop()
	department = department.split(' | ').shift()
	let sample = row['Tipo de muestra'] || ''
	let sample_code = (sample.split(' | ').length == 1) ? '' : sample.split(' | ').pop()
	let proof = row['Tipo de prueba tomada'] || ''
	let proof_code = (proof.split(' | ').length == 1) ? '' : proof.split(' | ').pop()
	let outcome = row['Resultado'] || ''
	let outcome_code = (outcome.split(' | ').length == 1) ? '' : outcome.split(' | ').pop()
	let data = [
		{
			text: `${row['Nombres']} ${row['Apellidos']}`,
			x: 10,
			y: 53
		},
		{
			text: documentType(row['Tipo de Documento']),
			x: 100,
			y: 53
		},
		{
			text: row['Número de identificación'].toString(),
			x: 120,
			y: 53
		},
		{
			text: 'x',
			x: coordenate(10, row['¿Viajó a áreas de circulación del virus?']).x,
			y: coordenate(10, row['¿Viajó a áreas de circulación del virus?']).y
		},
		{
			text: (optional(row['Lugar de viaje'] != '')) ? 'x' : '',
			x: (optional(row['Lugar de viaje'] != '')) ? coordenate(11, row['Lugar de viaje']).x : 0,
			y: (optional(row['Lugar de viaje'] != '')) ? coordenate(11, row['Lugar de viaje']).y : 0
		},
		{
			text: (optional(row['Lugar de viaje'] != '')) ? 'x' : '',
			x: (optional(row['Lugar de viaje'] != '')) ? coordenate(12, row['Lugar de viaje']).x : 0,
			y: (optional(row['Lugar de viaje'] != '')) ? coordenate(12, row['Lugar de viaje']).y : 0
		},
		{
			text: (optional(department) != '') ? `${department}/${row['Municipio']}` : '',
			x: 120,
			y: 75.5
		},
		{
			text: department_code,
			x: 174.5,
			y: 71.8,
			charSpace: 4

		},
		{
			text: optional(row['País']),
			x: 120,
			y: 88.3
		},
		{
			text: 'x',
			x: coordenate(13, row['¿Tuvo contacto estrecho en los últimos 14 días con un caso probable o confirmado con infección respiratoria aguda grave por virus nuevo?']).x,
			y: coordenate(13, row['¿Tuvo contacto estrecho en los últimos 14 días con un caso probable o confirmado con infección respiratoria aguda grave por virus nuevo?']).y
		},
		{
			text: (optional(row['¿Ha sido vacunado contra la COVID-19?'] != '' && row['¿Ha sido vacunado contra la COVID-19?'] != undefined)) ? 'x' : '',
			x: (optional(row['¿Ha sido vacunado contra la COVID-19?'] != '' && row['¿Ha sido vacunado contra la COVID-19?'] != undefined)) ? coordenate(17, row['¿Ha sido vacunado contra la COVID-19?']).x : 0,
			y: (optional(row['¿Ha sido vacunado contra la COVID-19?'] != '' && row['¿Ha sido vacunado contra la COVID-19?'] != undefined)) ? coordenate(17, row['¿Ha sido vacunado contra la COVID-19?']).y : 0
		},
		{
			text: (row['Número de dosis'] === 0 || row['Número de dosis'] == undefined) ? '' : row['Número de dosis'].toString(),
			x: 82.5,
			y: 237.5
		},
		{
			text: (row['Fecha de última dosis']) ? formatDate(row['Fecha de última dosis']).format('DD') : '',
			x: 100,
			y: 237.5,
			charSpace: 4.5
		},
		{
			text: (row['Fecha de última dosis']) ? formatDate(row['Fecha de última dosis']).format('MM') : '',
			x: 117,
			y: 237.5,
			charSpace: 4.5
		},
		{
			text: (row['Fecha de última dosis']) ? formatDate(row['Fecha de última dosis']).format('YYYY') : '',
			x: 133.5,
			y: 237.5,
			charSpace: 5
		},
		{
			text: (row['Nombre de la Vacuna'] === 0 || row['Nombre de la Vacuna'] == undefined) ? '' : row['Nombre de la Vacuna'].toString(),
			x: 166,
			y: 237.5
		},
		{
			text: sample_code,
			x: 98,
			y: 270.2
		},
		{
			text: proof_code,
			x: 108,
			y: 270.2
		},
		{
			text: '2H',
			x: 118.5,
			y: 270.2
		},
		{
			text: outcome_code,
			x: 131,
			y: 270.2
		},
		{
			text: (row['Fecha de toma de la muestra']) ? formatDate(row['Fecha de toma de la muestra']).format('DD.MM.YYYY') : '',
			x: 13.2,
			y: 270.2,
			charSpace: 1.75
		}
	]
	let other = ''
	row['¿Reporta alguno de los siguientes síntomas?'].split(',').forEach((item, index) => {
		if(coordenate(14, item.trim()).default) {
			other += item
			if(row['¿Reporta alguno de los siguientes síntomas?'].split(',').length != index+1){
				other += ', '
			} else {
				data.push({
					text: 'x',
					x: coordenate(14, item.trim()).x,
					y: coordenate(14, item.trim()).y
				})
				data.push({
					text: other,
					x: 120,
					y: 122
				})
			}
		} else {
			data.push({
				text: 'x',
				x: coordenate(14, item.trim()).x,
				y: coordenate(14, item.trim()).y
			})
		}
	})
	other = ''
	row['¿Reporta alguno de los siguientes antecedentes clínicos?'].split(',').forEach((item, index) => {
		if(coordenate(15, item.trim()).default) {
			other += item
			if(row['¿Reporta alguno de los siguientes antecedentes clínicos?'].split(',').length != index+1){
				other += ', '
			} else {
				data.push({
					text: 'x',
					x: coordenate(15, item.trim()).x,
					y: coordenate(15, item.trim()).y
				})
				data.push({
					text: other,
					x: 128,
					y: 150.5
				})
			}
		} else {
			data.push({
				text: 'x',
				x: coordenate(15, item.trim()).x,
				y: coordenate(15, item.trim()).y
			})
		}
	})
	return data
}