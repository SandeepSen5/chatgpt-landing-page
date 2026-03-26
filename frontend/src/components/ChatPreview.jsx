export default function ChatPreview() {
    return (
        <section className="py-20 px-6 max-w-6xl mx-auto">

           
            <h2 className="text-3xl font-bold text-center mb-12">
                Experience AI in Action
            </h2>

            
            <div className="bg-gray-900 rounded-2xl p-6 max-w-3xl mx-auto shadow-lg">

                
                <div className="space-y-4">

                   
                    <div className="flex justify-end items-start gap-2">
                        <div className="bg-purple-600 px-4 py-2 rounded-lg max-w-xs">
                            Write a React button component
                        </div>

                        <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-xs">
                            U
                        </div>
                    </div>

                    
                    <div className="flex justify-start">
                        <div className="bg-gray-800 px-4 py-3 rounded-lg max-w-xs text-sm text-gray-300">
                            Here's a reusable React button component:

                            <pre className="mt-2 text-xs text-purple-400 whitespace-pre-wrap break-words">
                                {`function Button({ children }) {
  return (
    <button className="px-4 py-2 bg-blue-500 text-white rounded">
      {children}
    </button>
  );
}`}
                            </pre>
                        </div>
                    </div>

                </div>

                
                <div className="mt-6 flex items-center gap-2 border border-gray-700 rounded-lg px-3 py-2">
                    <input
                        type="text"
                        placeholder="Ask anything..."
                        className="bg-transparent outline-none flex-1 text-sm"
                    />
                    <button className="bg-purple-600 px-3 py-1 rounded-md text-sm">
                        Send
                    </button>
                </div>

            </div>
        </section>
    );
}