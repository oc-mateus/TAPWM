namespace WindowsFormsApp1
{
    partial class frmHorista
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.btnInstanciarHorista = new System.Windows.Forms.Button();
            this.lbDataEntradaEmpresa = new System.Windows.Forms.Label();
            this.lbSalarioMensal = new System.Windows.Forms.Label();
            this.lbNome = new System.Windows.Forms.Label();
            this.lbMatricula = new System.Windows.Forms.Label();
            this.txtDataEntradaEmpresa = new System.Windows.Forms.TextBox();
            this.txtSalarioHoras = new System.Windows.Forms.TextBox();
            this.txtNome = new System.Windows.Forms.TextBox();
            this.txtMatricula = new System.Windows.Forms.TextBox();
            this.label1 = new System.Windows.Forms.Label();
            this.txtNumeroHoras = new System.Windows.Forms.TextBox();
            this.label2 = new System.Windows.Forms.Label();
            this.txtDiasFalta = new System.Windows.Forms.TextBox();
            this.SuspendLayout();
            // 
            // btnInstanciarHorista
            // 
            this.btnInstanciarHorista.Location = new System.Drawing.Point(262, 303);
            this.btnInstanciarHorista.Name = "btnInstanciarHorista";
            this.btnInstanciarHorista.Size = new System.Drawing.Size(326, 209);
            this.btnInstanciarHorista.TabIndex = 19;
            this.btnInstanciarHorista.Text = "Instanciar Horista";
            this.btnInstanciarHorista.UseVisualStyleBackColor = true;
            this.btnInstanciarHorista.Click += new System.EventHandler(this.btnInstanciarHorista_Click);
            // 
            // lbDataEntradaEmpresa
            // 
            this.lbDataEntradaEmpresa.AutoSize = true;
            this.lbDataEntradaEmpresa.Location = new System.Drawing.Point(135, 165);
            this.lbDataEntradaEmpresa.Name = "lbDataEntradaEmpresa";
            this.lbDataEntradaEmpresa.Size = new System.Drawing.Size(162, 16);
            this.lbDataEntradaEmpresa.TabIndex = 18;
            this.lbDataEntradaEmpresa.Text = "Data Entrada na Empresa";
            // 
            // lbSalarioMensal
            // 
            this.lbSalarioMensal.AutoSize = true;
            this.lbSalarioMensal.Location = new System.Drawing.Point(135, 116);
            this.lbSalarioMensal.Name = "lbSalarioMensal";
            this.lbSalarioMensal.Size = new System.Drawing.Size(103, 16);
            this.lbSalarioMensal.TabIndex = 17;
            this.lbSalarioMensal.Text = "Salario por hora";
            // 
            // lbNome
            // 
            this.lbNome.AutoSize = true;
            this.lbNome.Location = new System.Drawing.Point(135, 71);
            this.lbNome.Name = "lbNome";
            this.lbNome.Size = new System.Drawing.Size(44, 16);
            this.lbNome.TabIndex = 16;
            this.lbNome.Text = "Nome";
            // 
            // lbMatricula
            // 
            this.lbMatricula.AutoSize = true;
            this.lbMatricula.Location = new System.Drawing.Point(135, 26);
            this.lbMatricula.Name = "lbMatricula";
            this.lbMatricula.Size = new System.Drawing.Size(61, 16);
            this.lbMatricula.TabIndex = 15;
            this.lbMatricula.Text = "Matricula";
            // 
            // txtDataEntradaEmpresa
            // 
            this.txtDataEntradaEmpresa.Location = new System.Drawing.Point(349, 162);
            this.txtDataEntradaEmpresa.Name = "txtDataEntradaEmpresa";
            this.txtDataEntradaEmpresa.Size = new System.Drawing.Size(176, 22);
            this.txtDataEntradaEmpresa.TabIndex = 14;
            // 
            // txtSalarioHoras
            // 
            this.txtSalarioHoras.Location = new System.Drawing.Point(349, 113);
            this.txtSalarioHoras.Name = "txtSalarioHoras";
            this.txtSalarioHoras.Size = new System.Drawing.Size(176, 22);
            this.txtSalarioHoras.TabIndex = 13;
            // 
            // txtNome
            // 
            this.txtNome.Location = new System.Drawing.Point(349, 68);
            this.txtNome.Name = "txtNome";
            this.txtNome.Size = new System.Drawing.Size(338, 22);
            this.txtNome.TabIndex = 12;
            // 
            // txtMatricula
            // 
            this.txtMatricula.Location = new System.Drawing.Point(349, 23);
            this.txtMatricula.Name = "txtMatricula";
            this.txtMatricula.Size = new System.Drawing.Size(100, 22);
            this.txtMatricula.TabIndex = 11;
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Location = new System.Drawing.Point(135, 215);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(114, 16);
            this.label1.TabIndex = 21;
            this.label1.Text = "Numero de Horas";
            // 
            // txtNumeroHoras
            // 
            this.txtNumeroHoras.Location = new System.Drawing.Point(349, 212);
            this.txtNumeroHoras.Name = "txtNumeroHoras";
            this.txtNumeroHoras.Size = new System.Drawing.Size(176, 22);
            this.txtNumeroHoras.TabIndex = 20;
            // 
            // label2
            // 
            this.label2.AutoSize = true;
            this.label2.Location = new System.Drawing.Point(135, 258);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(82, 16);
            this.label2.TabIndex = 23;
            this.label2.Text = "Dias de falta";
            // 
            // txtDiasFalta
            // 
            this.txtDiasFalta.Location = new System.Drawing.Point(349, 255);
            this.txtDiasFalta.Name = "txtDiasFalta";
            this.txtDiasFalta.Size = new System.Drawing.Size(176, 22);
            this.txtDiasFalta.TabIndex = 22;
            // 
            // frmHorista
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 16F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(919, 596);
            this.Controls.Add(this.label2);
            this.Controls.Add(this.txtDiasFalta);
            this.Controls.Add(this.label1);
            this.Controls.Add(this.txtNumeroHoras);
            this.Controls.Add(this.btnInstanciarHorista);
            this.Controls.Add(this.lbDataEntradaEmpresa);
            this.Controls.Add(this.lbSalarioMensal);
            this.Controls.Add(this.lbNome);
            this.Controls.Add(this.lbMatricula);
            this.Controls.Add(this.txtDataEntradaEmpresa);
            this.Controls.Add(this.txtSalarioHoras);
            this.Controls.Add(this.txtNome);
            this.Controls.Add(this.txtMatricula);
            this.Name = "frmHorista";
            this.Text = "frmHorista";
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Button btnInstanciarHorista;
        private System.Windows.Forms.Label lbDataEntradaEmpresa;
        private System.Windows.Forms.Label lbSalarioMensal;
        private System.Windows.Forms.Label lbNome;
        private System.Windows.Forms.Label lbMatricula;
        private System.Windows.Forms.TextBox txtDataEntradaEmpresa;
        private System.Windows.Forms.TextBox txtSalarioHoras;
        private System.Windows.Forms.TextBox txtNome;
        private System.Windows.Forms.TextBox txtMatricula;
        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.TextBox txtNumeroHoras;
        private System.Windows.Forms.Label label2;
        private System.Windows.Forms.TextBox txtDiasFalta;
    }
}