const ReactGA = require('react-ga')
ReactGA.initialize('UA-83022212-4')

const ascii = `
                                                                                           
                                                  /\\                                       
                                    ----+----    /  \\     ----+----                        
                  +----+  +-------      |       /    \\        |      +-------  +----+      
                  |the |  |             |      /------\\       |      |         | of |      
                  +----+  +------+      |     /        \\      |      +-----    +----+      
                                 |      |                     |      |                     
         +-----+-+-----+  -------+      |      +----+         |      +-------              
         +-----+ +-----+                     +-+----+-+                  ( )          ++   
               | |                           | |                          '           ||   
               | |   +--+  +-+   +-+  +--+   | |         ++---+ +-+/--+ +++  +++--++  |+--+
               | | +++--+++ \\\\   // +++--+++ +-+----+   +++---+ +-----+ ++|  ||+--+++ |+--+
               | | ||    ||  \\\\ //  ||    ||   +----+-+ ||        ||     ||  ||    || ||   
               | | +++--+||   \\V/   +++--+||        | | +++---+ +-++-+  +++-+||+--+++ ++--+
               | |   +--+++    V      +--+++        | |  ++---+ +----+  +---+||+--++   +--+
               +-+                           +-+----+-+                      ||            
       +-+-----++                              +----+                        ||            
         +-----+            /\\/\\    -----+                +---+    /\\/\\      ++            
                           / /  /        |   +----+   |   |   |   \\  \\ \\                   
                           \\/\\ /    +----+   |    |   |   +---+    \\ /\\/                   
                              /     |        |    |   |       |     \\                      
                             /      |        |    |   |       |      \\                     
                                    +-----   +----+   |   +---+                            


`
exports.onClientEntry = () => {
    console.log(ascii)
}

exports.onRouteUpdate = ({ location }) => {
    ReactGA.pageview(location.pathname)
}
