function Cadastro() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-6">
      <div className="max-w-4xl w-full bg-gray-800 rounded-lg shadow-lg p-8 flex">
        <div className="w-1/2 pr-4">
          <h1 className="text-4xl font-semibold text-center text-white mb-10">
            Cadastro de Aluno
          </h1>

          <form className="mb-8">
            <div className="mb-6">
              <label className="block text-md font-medium text-gray-300 mb-2">
                Nome do Aluno:
              </label>
              <input
                type="text"
                placeholder="Digite o nome do aluno"
                className="block w-full p-3 border border-gray-600 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              />
            </div>
            <div className="mb-6">
              <label className="block text-md font-medium text-gray-300 mb-2">
                Nome do Curso:
              </label>
              <input
                type="text"
                placeholder="Digite o nome do curso"
                className="block w-full p-3 border border-gray-600 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              />
            </div>
            <button
              type="submit"
              className="w-full p-3 text-lg text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-200 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              Cadastrar
            </button>
          </form>
        </div>

        <div className="w-1/2 pl-4">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Alunos Cadastrados
          </h2>
          <ul className="divide-y divide-gray-700">
            <li className="flex justify-between items-center py-4">
              <span className="text-lg text-gray-300">Aluno 1 - Curso A</span>
              <div>
                <button className="mr-2 px-3 py-1 text-sm text-white bg-teal-500 rounded-lg hover:bg-teal-600 transition duration-200 shadow-md">
                  Ver perfil
                </button>
                <button className="mr-2 px-3 py-1 text-sm text-white bg-yellow-500 rounded-lg hover:bg-yellow-600 transition duration-200 shadow-md">
                  Editar
                </button>
                <button className="px-3 py-1 text-sm text-white bg-red-500 rounded-lg hover:bg-red-600 transition duration-200 shadow-md">
                  Deletar
                </button>
              </div>
            </li>
            <li className="flex justify-between items-center py-4">
              <span className="text-lg text-gray-300">Aluno 2 - Curso B</span>
              <div>
                <button className="mr-2 px-3 py-1 text-sm text-white bg-teal-500 rounded-lg hover:bg-teal-600 transition duration-200 shadow-md">
                  Ver perfil
                </button>
                <button className="mr-2 px-3 py-1 text-sm text-white bg-yellow-500 rounded-lg hover:bg-yellow-600 transition duration-200 shadow-md">
                  Editar
                </button>
                <button className="px-3 py-1 text-sm text-white bg-red-500 rounded-lg hover:bg-red-600 transition duration-200 shadow-md">
                  Deletar
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cadastro;
