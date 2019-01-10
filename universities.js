var universities={
    saveUniversityDetails:async function (PostData){
        let results = await global.mysqlConnectionPool.execute("CALL AddStudentShortlistUniversities('"+PostData.StudentID+"','"+PostData.UniversityID+"')");
        return "done";
    },
    getShortlistUniversityDetails:async function(GetData){
        let[rows,fields]=await global.mysqlConnectionPool.execute("CALL GetShortlistedUniversities('"+GetData.StudentID+"')");
        return rows[0];
    },
    getUniversityDetails:async function(GetData){
        let[rows,fields]=await global.mysqlConnectionPool.execute("CALL FilterUniversities('"+GetData.Country+"','"+GetData.Program+"','"+GetData.GREGMAT+"')");
        return rows[0];
    },
    CompareUniversityDetails:async function(GetData){
        let[rows,fields]=await global.mysqlConnectionPool.execute("CALL CompareUniversities('"+GetData.UniversityID+"')");
        return rows[0];
    }
};

module.exports = universities;