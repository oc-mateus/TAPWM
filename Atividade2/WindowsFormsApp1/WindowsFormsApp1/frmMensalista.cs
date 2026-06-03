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
    public partial class frmMensalista : Form
    {
        public frmMensalista()
        {
            InitializeComponent();
        }

        private void label3_Click(object sender, EventArgs e)
        {

        }

        private void textBox3_TextChanged(object sender, EventArgs e)
        {

        }

        private void textBox2_TextChanged(object sender, EventArgs e)
        {

        }

        private void textBox1_TextChanged(object sender, EventArgs e)
        {

        }

        private void btnInstanciarMensalista_Click(object sender, EventArgs e)
        {
            Mensalista mensalista = new Mensalista();
            mensalista.NomeEmpregado = txtNome.Text;
            mensalista.Matricula = Convert.ToInt32(txtMatricula.Text);
            mensalista.DataEntradaEmpresa = Convert.ToDateTime(txtDataEntradaEmpresa.Text);
            mensalista.SalarioMensal = Convert.ToDouble(txtSalarioMensal.Text);

            MessageBox.Show("Nome = " + mensalista.NomeEmpregado +
                "\n Matricula = " + mensalista.Matricula +
                "\n Tempo Trabalho = " + mensalista.TempoTrabalho() +
                "\n Salario FInal = " + mensalista.SalarioBruto().ToString("N2"));
        }

        private void btnInstanciarMensalistaParametro_Click(object sender, EventArgs e)
        {
            Mensalista objMensalista = new Mensalista(Convert.ToInt32(txtMatricula.Text), txtNome.Text, 
                Convert.ToDateTime(txtDataEntradaEmpresa.Text), Convert.ToDouble(txtSalarioMensal.Text));

            MessageBox.Show("Nome = " + objMensalista.NomeEmpregado +
                "\n Matricula = " + objMensalista.Matricula +
                "\n Tempo Trabalho = " + objMensalista.TempoTrabalho() +
                "\n Salario FInal = " + objMensalista.SalarioBruto().ToString("N2"));
        }
    }
}
