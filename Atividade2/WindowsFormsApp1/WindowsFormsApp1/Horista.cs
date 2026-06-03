using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TAPAula
{
    internal class Horista : Empregado
    {
        public double SalarioHora { get; set; }
        public double NumeroHora { get; set; }
        public int DiasFalta { get; set; }

        public override double SalarioBruto()
        {
            return this.SalarioHora * this.NumeroHora;
        }

        public override int TempoTrabalho()
        {
            TimeSpan span =
                DateTime.Today.Subtract(DataEntradaEmpresa);
            return (span.Days - DiasFalta);
        }

        public Horista() { }
    }
}
