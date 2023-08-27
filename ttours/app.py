from flask import Flask, render_template, request, jsonify

routes = {
    1  :'Harvard Square - Nubian Station',
    44 :'Jackson Square - Ruggles Station',
    45 :'Franklin Park - Ruggles Station',
    57 :'Watertown Yard - Kenmore Station'
    }

# Configure application
app = Flask(__name__)

# User reaches landing page
@app.route("/")
def index():
    """Display homepage"""
    return render_template("index.html")

@app.route("/search", methods=["POST"])
def search():
    def getNearestTours():
        latitude = request.form.get('latitude')
        longitude = request.form.get('longitude')
        # process location data to get nearest route
        return 45


    nearby_route = getNearestTours()

    found = True
    distance = 10
    # might have to convert distance from miles to feet
    nearest_stop = "Franklin Park"

    if request.method == "POST":
        return render_template("search.html", nearby_route=nearby_route, routes=routes, distance=distance, nearest_stop=nearest_stop, found=found)

@app.route("/msearch", methods=["GET","POST"])
def msearch():
    if request.method == "GET":
        return render_template("msearch.html")

    if request.method == "POST":
        search_results = request.form.get('searchQuery')

        def processQuery():
            return 45

        found = True
        closest_match = processQuery()

        return render_template("mresults.html", search_results=search_results, closest_match=closest_match, routes=routes, found=found)

@app.route("/routeinfo", methods=["GET","POST"])
def routeinfo():
    sel_route = 45
    return render_template("routeinfo.html", sel_route=sel_route, routes=routes)

@app.route("/routemap", methods=["GET","POST"])
def routemap():
    sel_route = 45
    return render_template("routemap.html", sel_route=sel_route, routes=routes)

@app.route("/about", methods=["GET","POST"])
def about():
    return render_template("about.html")

@app.route("/share", methods=["GET","POST"])
def share():
    return render_template("share.html")

if __name__ == "__main__":
    app.run()


# array of json objects (routes); must parse the json file
# iterate through array to get route name, images, number etc