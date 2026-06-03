namespace WindowsFormsApp1
{
    partial class Form1
    {
        /// <summary>
        /// Variável de designer necessária.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Limpar os recursos que estão sendo usados.
        /// </summary>
        /// <param name="disposing">true se for necessário descartar os recursos gerenciados; caso contrário, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Código gerado pelo Windows Form Designer

        /// <summary>
        /// Método necessário para suporte ao Designer - não modifique 
        /// o conteúdo deste método com o editor de código.
        /// </summary>
        private void InitializeComponent()
        {
            this.btnMensalista = new System.Windows.Forms.Button();
            this.btnHorista = new System.Windows.Forms.Button();
            this.SuspendLayout();
            // 
            // btnMensalista
            // 
            this.btnMensalista.Location = new System.Drawing.Point(210, 174);
            this.btnMensalista.Name = "btnMensalista";
            this.btnMensalista.Size = new System.Drawing.Size(110, 68);
            this.btnMensalista.TabIndex = 1;
            this.btnMensalista.Text = "Mensalista";
            this.btnMensalista.UseVisualStyleBackColor = true;
            this.btnMensalista.Click += new System.EventHandler(this.btnMensalista_Click);
            // 
            // btnHorista
            // 
            this.btnHorista.Location = new System.Drawing.Point(456, 174);
            this.btnHorista.Name = "btnHorista";
            this.btnHorista.Size = new System.Drawing.Size(110, 68);
            this.btnHorista.TabIndex = 2;
            this.btnHorista.Text = "Horista";
            this.btnHorista.UseVisualStyleBackColor = true;
            this.btnHorista.Click += new System.EventHandler(this.btnHorista_Click);
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 16F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(800, 450);
            this.Controls.Add(this.btnHorista);
            this.Controls.Add(this.btnMensalista);
            this.Name = "Form1";
            this.Text = "Form1";
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.Button btnMensalista;
        private System.Windows.Forms.Button btnHorista;
    }
}

