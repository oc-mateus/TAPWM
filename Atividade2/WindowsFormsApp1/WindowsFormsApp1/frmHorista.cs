using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using TAPAula;

namespace WindowsFormsApp1
{
    public partial class frmHorista : Form
    {
        public frmHorista()
        {
            InitializeComponent();
        }

        private void btnInstanciarHorista_Click(object sender, EventArgs e)
        {
            Horista horista = new Horista();
            horista.Matricula = Int32.Parse(txtMatricula.Text);
            horista.NomeEmpregado = txtNome.Text;
            horista.SalarioHora = Double.Parse(txtSalarioHoras.Text);
            horista.DataEntradaEmpresa = Convert.ToDateTime(txtDataEntradaEmpresa.Text);
            horista.NumeroHora = Double.Parse(txtNumeroHoras.Text);
            horista.DiasFalta = Int32.Parse(txtDiasFalta.Text);

            MessageBox.Show("Nome = " + horista.NomeEmpregado +
                "\n Matricula = " + horista.Matricula +
                "\n Salario por Hora = " + horista.SalarioHora +
                "\n Data de entrada na empresa = " + horista.DataEntradaEmpresa +
                "\n Numero de horas = " + horista.NumeroHora +
                "\n Dias falta = " + horista.DiasFalta +
                "\n Tempo Trabalho = " + horista.TempoTrabalho() +
                "\n Salario FInal = " + horista.SalarioBruto().ToString("N2"));
        }
    }
}
