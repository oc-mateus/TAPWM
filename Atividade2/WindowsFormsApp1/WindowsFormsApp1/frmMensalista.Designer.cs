namespace WindowsFormsApp1
{
    partial class frmMensalista
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
            this.txtMatricula = new System.Windows.Forms.TextBox();
            this.txtNome = new System.Windows.Forms.TextBox();
            this.txtSalarioMensal = new System.Windows.Forms.TextBox();
            this.txtDataEntradaEmpresa = new System.Windows.Forms.TextBox();
            this.lbMatricula = new System.Windows.Forms.Label();
            this.lbNome = new System.Windows.Forms.Label();
            this.lbSalarioMensal = new System.Windows.Forms.Label();
            this.lbDataEntradaEmpresa = new System.Windows.Forms.Label();
            this.btnInstanciarMensalista = new System.Windows.Forms.Button();
            this.btnInstanciarMensalistaParametro = new System.Windows.Forms.Button();
            this.SuspendLayout();
            // 
            // txtMatricula
            // 
            this.txtMatricula.Location = new System.Drawing.Point(364, 58);
            this.txtMatricula.Name = "txtMatricula";
            this.txtMatricula.Size = new System.Drawing.Size(100, 22);
            this.txtMatricula.TabIndex = 0;
            this.txtMatricula.TextChanged += new System.EventHandler(this.textBox1_TextChanged);
            // 
            // txtNome
            // 
            this.txtNome.Location = new System.Drawing.Point(364, 103);
            this.txtNome.Name = "txtNome";
            this.txtNome.Size = new System.Drawing.Size(338, 22);
            this.txtNome.TabIndex = 1;
            this.txtNome.TextChanged += new System.EventHandler(this.textBox2_TextChanged);
            // 
            // txtSalarioMensal
            // 
            this.txtSalarioMensal.Location = new System.Drawing.Point(364, 148);
            this.txtSalarioMensal.Name = "txtSalarioMensal";
            this.txtSalarioMensal.Size = new System.Drawing.Size(176, 22);
            this.txtSalarioMensal.TabIndex = 2;
            this.txtSalarioMensal.TextChanged += new System.EventHandler(this.textBox3_TextChanged);
            // 
            // txtDataEntradaEmpresa
            // 
            this.txtDataEntradaEmpresa.Location = new System.Drawing.Point(364, 197);
            this.txtDataEntradaEmpresa.Name = "txtDataEntradaEmpresa";
            this.txtDataEntradaEmpresa.Size = new System.Drawing.Size(176, 22);
            this.txtDataEntradaEmpresa.TabIndex = 3;
            // 
            // lbMatricula
            // 
            this.lbMatricula.AutoSize = true;
            this.lbMatricula.Location = new System.Drawing.Point(150, 61);
            this.lbMatricula.Name = "lbMatricula";
            this.lbMatricula.Size = new System.Drawing.Size(61, 16);
            this.lbMatricula.TabIndex = 4;
            this.lbMatricula.Text = "Matricula";
            // 
            // lbNome
            // 
            this.lbNome.AutoSize = true;
            this.lbNome.Location = new System.Drawing.Point(150, 106);
            this.lbNome.Name = "lbNome";
            this.lbNome.Size = new System.Drawing.Size(44, 16);
            this.lbNome.TabIndex = 5;
            this.lbNome.Text = "Nome";
            // 
            // lbSalarioMensal
            // 
            this.lbSalarioMensal.AutoSize = true;
            this.lbSalarioMensal.Location = new System.Drawing.Point(150, 151);
            this.lbSalarioMensal.Name = "lbSalarioMensal";
            this.lbSalarioMensal.Size = new System.Drawing.Size(97, 16);
            this.lbSalarioMensal.TabIndex = 6;
            this.lbSalarioMensal.Text = "Salario Mensal";
            this.lbSalarioMensal.Click += new System.EventHandler(this.label3_Click);
            // 
            // lbDataEntradaEmpresa
            // 
            this.lbDataEntradaEmpresa.AutoSize = true;
            this.lbDataEntradaEmpresa.Location = new System.Drawing.Point(150, 200);
            this.lbDataEntradaEmpresa.Name = "lbDataEntradaEmpresa";
            this.lbDataEntradaEmpresa.Size = new System.Drawing.Size(162, 16);
            this.lbDataEntradaEmpresa.TabIndex = 7;
            this.lbDataEntradaEmpresa.Text = "Data Entrada na Empresa";
            // 
            // btnInstanciarMensalista
            // 
            this.btnInstanciarMensalista.Location = new System.Drawing.Point(54, 399);
            this.btnInstanciarMensalista.Name = "btnInstanciarMensalista";
            this.btnInstanciarMensalista.Size = new System.Drawing.Size(326, 209);
            this.btnInstanciarMensalista.TabIndex = 9;
            this.btnInstanciarMensalista.Text = "Instanciar Mensalista";
            this.btnInstanciarMensalista.UseVisualStyleBackColor = true;
            this.btnInstanciarMensalista.Click += new System.EventHandler(this.btnInstanciarMensalista_Click);
            // 
            // btnInstanciarMensalistaParametro
            // 
            this.btnInstanciarMensalistaParametro.Location = new System.Drawing.Point(541, 399);
            this.btnInstanciarMensalistaParametro.Name = "btnInstanciarMensalistaParametro";
            this.btnInstanciarMensalistaParametro.Size = new System.Drawing.Size(353, 209);
            this.btnInstanciarMensalistaParametro.TabIndex = 10;
            this.btnInstanciarMensalistaParametro.Text = "Instanciar mensalista passando parametros";
            this.btnInstanciarMensalistaParametro.UseVisualStyleBackColor = true;
            this.btnInstanciarMensalistaParametro.Click += new System.EventHandler(this.btnInstanciarMensalistaParametro_Click);
            // 
            // frmMensalista
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 16F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(924, 643);
            this.Controls.Add(this.btnInstanciarMensalistaParametro);
            this.Controls.Add(this.btnInstanciarMensalista);
            this.Controls.Add(this.lbDataEntradaEmpresa);
            this.Controls.Add(this.lbSalarioMensal);
            this.Controls.Add(this.lbNome);
            this.Controls.Add(this.lbMatricula);
            this.Controls.Add(this.txtDataEntradaEmpresa);
            this.Controls.Add(this.txtSalarioMensal);
            this.Controls.Add(this.txtNome);
            this.Controls.Add(this.txtMatricula);
            this.Name = "frmMensalista";
            this.Text = "frmMensalista";
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.TextBox txtMatricula;
        private System.Windows.Forms.TextBox txtNome;
        private System.Windows.Forms.TextBox txtSalarioMensal;
        private System.Windows.Forms.TextBox txtDataEntradaEmpresa;
        private System.Windows.Forms.Label lbMatricula;
        private System.Windows.Forms.Label lbNome;
        private System.Windows.Forms.Label lbSalarioMensal;
        private System.Windows.Forms.Label lbDataEntradaEmpresa;
        private System.Windows.Forms.Button btnInstanciarMensalista;
        private System.Windows.Forms.Button btnInstanciarMensalistaParametro;
    }
}