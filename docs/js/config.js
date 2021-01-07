function datos_basicos(row){
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
			x: 102,
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
			text: row['paísdeorigen'].toString(),
			x: 175,
			y: 116
		},
		{
			text: row['paísdeocurrencia'],
			x: 8,
			y: 128
		},
		{
			text: `${row['departamentodeocurrencia']}/${row['municipiodeocurrencia']}`,
			x: 76,
			y: 128
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
			text: row['eps'],
			x: 142,
			y: 153
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
			text: `${row['paísderesidencia']}/${row['departamentoderesidencia']}/${row['municipioderesidencia']}`,
			x: 68,
			y: 197
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
			x: 128.5,
			y: 212.5
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
	let data = [
		{
			text: `${row['nombres']} ${row['apellidos']}`,
			x: 10,
			y: 58
		},
		{
			text: documentType(row['tipodedocumento']),
			x: 100,
			y: 58
		},
		{
			text: row['númerodeidentificación'].toString(),
			x: 120,
			y: 58
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
			text: (optional(row['departamento']) != '') ? `${row['departamento']}/${row['municipio']}` : '',
			x: 120,
			y: 82
		},
		{
			text: optional(row['país']),
			x: 120,
			y: 95.5
		},
		{
			text: 'x',
			x: coordenate(13, row['tuvocontactoestrechoenlosúltimos14díasconuncasoprobableoconfirmadoconinfecciónrespiratoriaagudagraveporvirusnuevo']).x,
			y: coordenate(13, row['tuvocontactoestrechoenlosúltimos14díasconuncasoprobableoconfirmadoconinfecciónrespiratoriaagudagraveporvirusnuevo']).y
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
					y: 132
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
					y: 164
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