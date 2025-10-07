from pathlib import Path
import os

def compilar_codigo_en_md(directorio_inicio: Path, archivo_salida: Path, extensiones: list, directorios_excluidos: list):
    """
    Recorre un directorio y sus subdirectorios en busca de archivos con las
    extensiones dadas, lee su contenido y lo escribe en un archivo Markdown.
    Ignora los directorios especificados en la lista de exclusión.

    Args:
        directorio_inicio (Path): La ruta del directorio desde donde empezar a buscar.
        archivo_salida (Path): La ruta del archivo .md donde se guardará todo.
        extensiones (list): Una lista de extensiones de archivo a buscar (ej. ['js', 'jsx', 'css']).
        directorios_excluidos (list): Una lista de nombres de directorios a ignorar.
    """
    print(f"Buscando archivos en: {directorio_inicio.resolve()}")
    print(f"Extensiones a incluir: {extensiones}")
    print(f"Directorios a excluir: {directorios_excluidos}")

    # Mapeo de extensiones a identificadores de lenguaje de Markdown
    lang_map = {
        # 'js': 'javascript',
        # 'jsx': 'jsx',
        'css': 'css',
        # 'html': 'html',
        # 'json': 'json',
    }

    try:
        with archivo_salida.open('w', encoding='utf-8') as f_salida:
            f_salida.write(f"# Compilación de Código del Proyecto: {directorio_inicio.name}\n\n")
            
            archivos_encontrados = []
            for ext in extensiones:
                archivos_encontrados.extend(directorio_inicio.rglob(f'*.{ext}'))

            # --- LÓGICA DE FILTRADO CORREGIDA ---
            # Se filtran los archivos que están dentro de un directorio excluido.
            archivos_filtrados = []
            for ruta_archivo in archivos_encontrados:
                # Comprobamos si alguno de los nombres de los directorios en la ruta
                # está en nuestra lista de exclusión.
                partes_ruta = ruta_archivo.parts
                if not any(directorio_excluido in partes_ruta for directorio_excluido in directorios_excluidos):
                    archivos_filtrados.append(ruta_archivo)
            
            if not archivos_filtrados:
                print("No se encontraron archivos con las extensiones especificadas (después de filtrar).")
                f_salida.write("## No se encontraron archivos relevantes en este proyecto.\n")
                return

            print(f"Se encontraron {len(archivos_filtrados)} archivos. Compilando en Markdown...")

            for ruta_archivo in sorted(archivos_filtrados): # Ordenamos para un resultado consistente
                try:
                    ruta_relativa = ruta_archivo.relative_to(directorio_inicio)
                    extension = ruta_archivo.suffix.lstrip('.')
                    lenguaje = lang_map.get(extension, '')

                    f_salida.write(f"---\n\n")
                    f_salida.write(f"## Archivo: `{ruta_relativa}`\n\n")
                    f_salida.write(f"```{lenguaje}\n")
                    
                    contenido = ruta_archivo.read_text(encoding='utf-8')
                    f_salida.write(contenido)

                    f_salida.write("\n```\n\n")

                except Exception as e:
                    error_msg = f"No se pudo leer el archivo: {ruta_archivo}. Error: {e}"
                    print(error_msg)
                    f_salida.write(f"// {error_msg}\n\n")

            print(f"¡Éxito! ✨ Todo el código se ha guardado en: {archivo_salida.resolve()}")

    except IOError as e:
        print(f"Error al escribir en el archivo de salida: {e}")
    except Exception as e:
        print(f"Ocurrió un error inesperado: {e}")

if __name__ == "__main__":
    # --- RUTA DE INICIO CORREGIDA ---
    # El script se ejecutará en el directorio donde está guardado este archivo .py
    directorio_script = Path(__file__).parent.resolve()
    
    # Nombre del archivo de salida.
    nombre_salida = "codigo_frontend_Gupo_Alfa_css.md"
    ruta_salida = directorio_script / nombre_salida

    # Extensiones de archivo que quieres incluir.
    # extensiones_a_buscar = ['js', 'jsx', 'html']
    # extensiones_a_buscar = ['jsx', 'html']
    extensiones_a_buscar = ['css', 'scss', 'sass']
    
    # Directorios que quieres excluir de la búsqueda.
    # Se ha añadido .vscode como otra carpeta común a ignorar.
    directorios_a_excluir = ['node_modules', 'dist', '.git', '.vscode']

    compilar_codigo_en_md(directorio_script, ruta_salida, extensiones_a_buscar, directorios_a_excluir)
