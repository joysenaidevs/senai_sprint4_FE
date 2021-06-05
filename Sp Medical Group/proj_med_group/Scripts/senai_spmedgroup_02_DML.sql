USE medicalGroup;
GO
--DML
INSERT INTO tipoUsuarios (nomeTipoUsuario)
VALUES					 ('Administrador')
						,('Medico')
						,('Paciente');
GO

INSERT INTO usuarios    (idTipoUsuario, nomeUsuario, email, senha)
VALUES					(1,'Administrador', 'adm@spmedicalgroup', 'adm123')
					   ,(2,'robertoP', 'roberto.possarie@spmedicalgroup', 'possarie123')
					   ,(3,'joao1', 'joao@email.com', 'joao123');
					   
GO

INSERT INTO clinicas		(cnpj, nomeFantasia, razaoSocial, horarioFuncionamento, endereco)
VALUES						('86400902000130', 'SP Medical Group',	'Clinica Possarie',	 '08:00', 'Av. Barão de Limeira,532, São paulo, SP');
GO

INSERT INTO pronturarios	(idUsuario,	nomePronturario, dataNascimentoo, telefone, rg, cpf, endereco)
VALUES						(3,'João Heleno', '09/04/1990', 3917-2199, '5898732331', '98723187622', 'Via de Pedestre Francisco Soriano');						
GO

INSERT INTO especialidades	(nomeEspecialidade)
VALUES						('Pediatria')
							,('Cardiologia')
							,('Psiquiatria')
							,('Radioterapia')
							,('Urologia')
							,('Dermatologia')
							,('Cirurgia Geral');
GO

INSERT INTO medicos			(idEspecialidade, idClinica,nomeMedico,email)
VALUES						(3,9,'Roberto Possarie','roberto.possarie@spmedicalgroup.com')
							,(4,9,'Ricardo Lemos','ricardo.lemos@spmedicalgroup.com')
							,(2,9,'Helena Strada','helena.strada@spmedicalgroup.com')
							,(7,9,'Saulo Santos','saulo.santos@spmedicalgroup.com')
							,(6,9,'Caique Zenetti','caique.zenetti@spmedicalgroup.com')
							,(5,9,'Pablo Escobar','pablo.escobar@spmedicalgroup.com')
							,(1,9,'Justin Silva','justin.silva@spmedicalgroup.com');
GO


INSERT INTO	consultas		(idPronturario, idMedico, dataConsulta, situacao)
VALUES						(29, 7, '09/10/2021', 'Agendada');	
GO
--(2, 5, 14/03/2021, 'realizada');
--(3,	1, 10/05/2021	'cancelada') = Caso houvesse mais prontuarios

