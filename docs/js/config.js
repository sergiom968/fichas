function datos_basicos(row){
	console.log(row)
	let eps = row['eps']
	let eps_code = (eps.split(' | ').length == 1) ? '' : eps.split(' | ').pop()
	eps = eps.split(' | ').shift()
	let rise_country = row['paísdeorigen'].toString()
	let rise_country_code = (rise_country.toLowerCase() == 'colombia') ? '170' : ''
	let residence_country = row['paísderesidencia'].toString()
	let residence_country_code = (rise_country.toLowerCase() == 'colombia') ? '170' : ''
	let occurrence_country = row['paísdeocurrencia'].toString()
	let occurrence_country_code = (occurrence_country.toLowerCase() == 'colombia') ? '170' : ''
	let residence_city = ''
	Object.keys(row).forEach((key) => {
		if(key.indexOf('municipioderesidencia') >= 0 && row[key] != 0) residence_city = row[key] 
  	})
	let residence_city_code = (residence_city.split(' | ').length == 1) ? '' : residence_city.split(' | ').pop()
	residence_city = (residence_city.split(' | ').length == 1) ? residence_city : residence_city.split(' | ')[0]
	let residence_department = row['departamentoderesidencia']
	let residence_department_code = (residence_department.split(' | ').length == 1) ? '' : residence_department.split(' | ').pop()
	residence_department = residence_department.split(' | ').shift()
	let occurrence_department = row['departamentodeocurrencia']
	let occurrence_department_code = (occurrence_department.split(' | ').length == 1) ? '' : occurrence_department.split(' | ').pop()
	occurrence_department = occurrence_department.split(' | ').shift()
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
			text: row['seleccionefichaadiligenciar'].split(' - ').pop(),
			x: 8,
			y: 69
		},
		{
			text: row['seleccionefichaadiligenciar'].split(' - ').shift(),
			x: 105,
			y: 68,
			charSpace: 3.5
		},
		{
			text: formatDate(row['marcatemporal'].split(' ').shift()).format('DD'),
			x: 128.5,
			y: 68,
			charSpace: 3.5
		},
		{
			text: formatDate(row['marcatemporal'].split(' ').shift()).format('MM'),
			x: 144.5,
			y: 68,
			charSpace: 3.5
		},
		{
			text: formatDate(row['marcatemporal'].split(' ').shift()).format('yyyy'),
			x: 160,
			y: 68,
			charSpace: 3.5
		},
		{
			text: 'x',
			x: coordenate(1, documentType(row['tipodedocumento'])).x,
			y: coordenate(1, documentType(row['tipodedocumento'])).y
		},
		{
			text: row['númerodeidentificación'].toString(),
			x: 136,
			y: 88
		},
		{
			text: `${row['nombres']} ${row['apellidos']}`,
			x: 8,
			y: 102
		},
		{
			text: row['teléfono'].toString(),
			x: 165,
			y: 102
		},
		{
			text: row['edad'].toString(),
			x: 69,
			y: 115.5
		},
		{
			text: 'x',
			x: coordenate(2, row['unidadmedidadeedad']).x,
			y: coordenate(2, row['unidadmedidadeedad']).y
		},
		{
			text: 'x',
			x: coordenate(3, row['sexo']).x,
			y: coordenate(3, row['sexo']).y
		},
		{
			text: formatDate(row['fechadenacimiento']).format('DD'),
			x: 9,
			y: 113.8,
			charSpace: 3.5
		},
		{
			text: formatDate(row['fechadenacimiento']).format('MM'),
			x: 24.5,
			y: 113.8,
			charSpace: 3.5
		},
		{
			text: formatDate(row['fechadenacimiento']).format('yyyy'),
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
			text: `${occurrence_department}/${capitalize(row['municipiodeocurrencia'])}`,
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
			text: 'x',
			x: coordenate(4, row['áreadeocurrencia']).x,
			y: coordenate(4, row['áreadeocurrencia']).y
		},
		{
			text: row['localidad'],
			x: 8,
			y: 139
		},
		{
			text: row['barrio'],
			x: 66,
			y: 139
		},
		{
			text: row['áreadeocurrencia'],
			x: 110,
			y: 139
		},
		{
			text: row['vereda'],
			x: 167,
			y: 139
		},
		{
			text: row['ocupación'],
			x: 8,
			y: 153
		},
		{
			text: 'x',
			x: coordenate(5, row['régimen']).x,
			y: coordenate(5, row['régimen']).y
		},
		{
			text: eps,
			x: 141,
			y: 154.5
		},
		{
			text: eps_code,
			x: 175,
			y: 150,
			charSpace: 3.25
		},
		{
			text: 'x',
			x: coordenate(6, row['pertenenciaétnica']).x,
			y: coordenate(6, row['pertenenciaétnica']).y
		},
		{
			text: row['estrato'].toString(),
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
			text: row['direcciónderesidencia'],
			x: 44,
			y: 203
		},
		{
			text: formatDate(row['marcatemporal'].split(' ').shift()).format('DD'),
			x: 7.5,
			y: 216.5,
			charSpace: 3.5
		},
		{
			text: formatDate(row['marcatemporal'].split(' ').shift()).format('MM'),
			x: 23.5,
			y: 216.5,
			charSpace: 3.5
		},
		{
			text: formatDate(row['marcatemporal'].split(' ').shift()).format('yyyy'),
			x: 39,
			y: 216.5,
			charSpace: 3.5
		},
		{
			text: formatDate(row['fechadeiniciodelossíntomas']).format('DD'),
			x: 69.5,
			y: 216.5,
			charSpace: 3.5
		},
		{
			text: formatDate(row['fechadeiniciodelossíntomas']).format('MM'),
			x: 85.5,
			y: 216.5,
			charSpace: 3.5
		},
		{
			text: formatDate(row['fechadeiniciodelossíntomas']).format('yyyy'),
			x: 101,
			y: 216.5,
			charSpace: 3.5
		},
		{
			text: 'x',
			x: coordenate(7, row['clasificacióndelcaso']).x,
			y: coordenate(7, row['clasificacióndelcaso']).y
		},
		{
			text: 'x',
			x: coordenate(9, row['hospitalizado']).x,
			y: coordenate(9, row['hospitalizado']).y
		},
		{
			text: (row['fechadehospitalización']) ? formatDate(row['fechadehospitalización']).format('DD') : '',
			x: 7.5,
			y: 233,
			charSpace: 3.5
		},
		{
			text: (row['fechadehospitalización']) ? formatDate(row['fechadehospitalización']).format('MM') : '',
			x: 23.5,
			y: 233,
			charSpace: 3.5
		},
		{
			text: (row['fechadehospitalización']) ? formatDate(row['fechadehospitalización']).format('yyyy') : '',
			x: 39,
			y: 233,
			charSpace: 3.5
		},
		{
			text: (row['fechadedefunción']) ? formatDate(row['fechadedefunción']).format('DD') : '',
			x: 94.5,
			y: 233,
			charSpace: 3.5
		},
		{
			text: (row['fechadedefunción']) ? formatDate(row['fechadedefunción']).format('MM') : '',
			x: 109.5,
			y: 233,
			charSpace: 3.5
		},
		{
			text: (row['fechadedefunción']) ? formatDate(row['fechadedefunción']).format('yyyy') : '',
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
			text: optional(row['ncertificadodedefunción']).toString(),
			x: 150,
			y: 235
		},
		{
			text: optional(row['causabásicadelamuerte']),
			x: 8,
			y: 246
		},
		{
			text: row['nombredequiendiligencialaficha'],
			x: 84,
			y: 246
		},
		{
			text: row['teléfonodequiendiligencialaficha'].toString(),
			x: 175,
			y: 246
		}
	]
}

function ficha_346(row){
	let department = row['departamento']
	let department_code = (department.split(' | ').length == 1) ? '' : department.split(' | ').pop()
	department = department.split(' | ').shift()
	let sample = row['tipodemuestra'] || ''
	let sample_code = (sample.split(' | ').length == 1) ? '' : sample.split(' | ').pop()
	let proof = row['tipodepruebatomada'] || ''
	let proof_code = (proof.split(' | ').length == 1) ? '' : proof.split(' | ').pop()
	let outcome = row['resultado'] || ''
	let outcome_code = (outcome.split(' | ').length == 1) ? '' : outcome.split(' | ').pop()
	let data = [
		{
			text: `${row['nombres']} ${row['apellidos']}`,
			x: 10,
			y: 53
		},
		{
			text: documentType(row['tipodedocumento']),
			x: 100,
			y: 53
		},
		{
			text: row['númerodeidentificación'].toString(),
			x: 120,
			y: 53
		},
		{
			text: 'x',
			x: coordenate(10, row['viajóaáreasdecirculacióndelvirus']).x,
			y: coordenate(10, row['viajóaáreasdecirculacióndelvirus']).y
		},
		{
			text: (optional(row['lugardeviaje'] != '')) ? 'x' : '',
			x: (optional(row['lugardeviaje'] != '')) ? coordenate(11, row['lugardeviaje']).x : 0,
			y: (optional(row['lugardeviaje'] != '')) ? coordenate(11, row['lugardeviaje']).y : 0
		},
		{
			text: (optional(row['lugardeviaje'] != '')) ? 'x' : '',
			x: (optional(row['lugardeviaje'] != '')) ? coordenate(12, row['lugardeviaje']).x : 0,
			y: (optional(row['lugardeviaje'] != '')) ? coordenate(12, row['lugardeviaje']).y : 0
		},
		{
			text: (optional(department) != '') ? `${department}/${row['municipio']}` : '',
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
			text: optional(row['país']),
			x: 120,
			y: 88.3
		},
		{
			text: 'x',
			x: coordenate(13, row['tuvocontactoestrechoenlosúltimos14díasconuncasoprobableoconfirmadoconinfecciónrespiratoriaagudagraveporvirusnuevo']).x,
			y: coordenate(13, row['tuvocontactoestrechoenlosúltimos14díasconuncasoprobableoconfirmadoconinfecciónrespiratoriaagudagraveporvirusnuevo']).y
		},
		{
			text: (optional(row['hasidovacunadocontralacovid-19'] != '')) ? 'x' : '',
			x: (optional(row['hasidovacunadocontralacovid-19'] != '')) ? coordenate(17, row['hasidovacunadocontralacovid-19']).x : 0,
			y: (optional(row['hasidovacunadocontralacovid-19'] != '')) ? coordenate(17, row['hasidovacunadocontralacovid-19']).y : 0
		},
		{
			text: (row['númerodedosis'] === 0) ? '' : row['númerodedosis'].toString(),
			x: 82.5,
			y: 237.5
		},
		{
			text: (row['fechadeúltimadosis']) ? formatDate(row['fechadeúltimadosis']).format('DD') : '',
			x: 100,
			y: 237.5,
			charSpace: 4.5
		},
		{
			text: (row['fechadeúltimadosis']) ? formatDate(row['fechadeúltimadosis']).format('MM') : '',
			x: 117,
			y: 237.5,
			charSpace: 4.5
		},
		{
			text: (row['fechadeúltimadosis']) ? formatDate(row['fechadeúltimadosis']).format('YYYY') : '',
			x: 133.5,
			y: 237.5,
			charSpace: 5
		},
		{
			text: (row['nombredelavacuna'] === 0) ? '' : row['nombredelavacuna'].toString(),
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
			text: (row['fechadetomadelamuestra']) ? formatDate(row['fechadetomadelamuestra']).format('DD.MM.YYYY') : '',
			x: 13.2,
			y: 270.2,
			charSpace: 1.75
		}
	]
	let other = ''
	row['reportaalgunodelossiguientessíntomas'].split(',').forEach((item, index) => {
		if(coordenate(14, item.trim()).default) {
			console.log(item)
			other += item
			console.log(other)
			if(row['reportaalgunodelossiguientessíntomas'].split(',').length != index+1){
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
	row['reportaalgunodelossiguientesantecedentesclínicos'].split(',').forEach((item, index) => {
		if(coordenate(15, item.trim()).default) {
			console.log(item)
			other += item
			console.log(other)
			if(row['reportaalgunodelossiguientesantecedentesclínicos'].split(',').length != index+1){
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