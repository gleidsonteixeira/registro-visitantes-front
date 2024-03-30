import { Button } from 'primereact/button';
import styled from 'styled-components';
import GraficoVisitantesTotal from '../../components/GraficoVisitantesTotal';
import GraficoVisitantesEstados from '../../components/GraficoVisitantesEstados';
import GraficoVisitantesCidades from '../../components/GraficoVisitantesCidades';
import GraficoVisitantesGeneros from '../../components/GraficoVisitantesGeneros';

const AdminContainer = styled.section`
	background-color: #f2f2f2;
	height: calc(100vh - 70px);
	padding: 26px 100px;
	overflow: auto;
	& h1 {
		display: flex;
		justify-content: flex-end;
	}
	& .graficos {
		display: flex;
		flex-wrap: wrap;
		gap: 26px;
		& .grafico {
			background-color: #ffffff;
			border-radius: 5px;
			padding: 16px;
			&:nth-child(odd) {
				width: calc(100% - 276px);
			}
			&:nth-child(even) {
				width: 250px;
				/* height: 250px; */
			}
			& h6 {
				font-size: 12px;
				font-weight: bold;
				text-transform: uppercase;
				letter-spacing: 1px;
				color: #777777;
				margin: 0;
				margin-bottom: 26px;
			}
		}
	}
`;

const Admin = () => {

	return (
		<AdminContainer>
			<h1>
				<Button label={'Baixar PDF'} />
			</h1>
			<div className='graficos'>
				<div className='grafico'>
					<h6>Total de visitas por mês</h6>
					<GraficoVisitantesTotal />
				</div>
				<div className='grafico'>
					<h6>Visitantes por cidade</h6>
          <GraficoVisitantesCidades />
				</div>
				<div className='grafico'>
					<h6>Visitantes por estado</h6>
          <GraficoVisitantesEstados />
				</div>
				<div className='grafico'>
					<h6>Visitantes por gênero</h6>
          <GraficoVisitantesGeneros />
				</div>
			</div>
		</AdminContainer>
	);
};

export default Admin;
